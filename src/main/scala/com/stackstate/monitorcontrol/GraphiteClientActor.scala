package com.stackstate.monitorcontrol

import java.net.InetSocketAddress
import java.time.ZonedDateTime

import akka.actor._
import akka.io._
import akka.util.ByteString

import scala.concurrent._

object GraphiteClientActor {
  def generateMetrics(host: String, port: Int)(implicit system: ActorSystem): Future[ActorRef] = {
    val remote = new InetSocketAddress(host, port)
    val readyPromise = Promise[ActorRef]()
    system.actorOf(Props(new GraphiteClientActor(remote, readyPromise)))
    readyPromise.future
  }

  case class SendMetric(metricName : String, point : Double)
  case class CloseConnection()
}

class GraphiteClientActor(remote: InetSocketAddress, connectPromise: Promise[ActorRef]) extends Actor {
  import Tcp._
  import context.system
  import GraphiteClientActor._

  IO(Tcp) ! Connect(remote)

  def receive = {
    case CommandFailed(_: Connect) =>
      connectPromise.failure(new Exception("failed to connect"))
      context stop self

    case c @ Connected(remote, local) =>
      connectPromise.success(self)
      val connection = sender()
      connection ! Register(self)

      context.become(connected(connection))
  }

  def connected(connection : ActorRef) : Receive = {
    case SendMetric(metricName, point) => {
      connection ! Write(ByteString(s"""$metricName $point ${ZonedDateTime.now().toEpochSecond}\n"""))
    }
    case CloseConnection => connection ! Close
    case Received(data) =>
      println("Received: "+data)
    case _: ConnectionClosed =>
      context stop self
  }
}
