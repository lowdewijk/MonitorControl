package com.stackstate.monitorcontrol

import java.net.InetSocketAddress
import java.time.ZonedDateTime

import akka.actor._
import akka.io._
import akka.util.ByteString

import scala.concurrent._
import scala.concurrent.duration._

object GraphiteClientActor {
  def connect(host: String, port: Int)(implicit system: ActorSystem): Future[ActorRef] = {
    val remote = new InetSocketAddress(host, port)
    val readyPromise = Promise[ActorRef]()
    system.actorOf(Props(new GraphiteClientActor(remote, readyPromise)))
    readyPromise.future
  }

  case class SendMetric(metricName : String, point : Double)
  case class CloseConnection()
}

class GraphiteClientActor(remote: InetSocketAddress, connectPromise: Promise[ActorRef]) extends Actor
  with ActorLogging {
  import Tcp._
  import context.system
  import context.dispatcher
  import GraphiteClientActor._

  IO(Tcp) ! Connect(remote)

  def receive = starting

  def starting : Receive = {
    case CommandFailed(_: Connect) =>
      connectPromise.failure(new Exception("failed to connect"))
      context stop self

    case c @ Connected(remote, local) =>
      connectPromise.success(self)
      val connection = sender()
      connection ! Register(self)

      context.become(connected(connection, None))
  }

  def connected(connection : ActorRef, active: Option[Cancellable]) : Receive = {
    case metric @ SendMetric(metricName, point) => {
      log.info(s"Sending metric $metric")
      active.foreach(_.cancel())
      val cancellable = system.scheduler.scheduleOnce(5.seconds, self, metric)
      context.become(connected(connection, Some(cancellable)))
      connection ! Write(ByteString(s"""$metricName $point ${ZonedDateTime.now().toEpochSecond}\n"""))
    }
    case CloseConnection => connection ! Close
    case Received(data) =>
      log.info("Received: "+data)
    case _: ConnectionClosed =>
      log.info("Connection closed, reconnecting")
      IO(Tcp) ! Connect(remote)
      context.become(starting)

  }
}
