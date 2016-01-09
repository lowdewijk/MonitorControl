package com.stackstate.monitorcontrol

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.ws.{BinaryMessage, Message, TextMessage}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server._
import akka.stream.ActorMaterializer
import akka.stream.scaladsl.Flow
import akka.util.Timeout
import com.stackstate.monitorcontrol.GraphiteClientActor.SendMetric

import scala.concurrent.{Future, ExecutionContext}
import scala.concurrent.duration._

import spray.json._
import spray.json.DefaultJsonProtocol._

case class ProviderDataPoint[T](provider: String, identifier: String, data: T)
case class GraphiteData(value: Double)

object Server extends App {

  implicit val system = ActorSystem("webapi")
  implicit val executor = system.dispatcher
  implicit val timeout = Timeout(1000.millis)
  implicit val materializer = ActorMaterializer()

  implicit def graphiteDataFormat = jsonFormat1(GraphiteData)
  implicit def providerDataPointFormat[T: JsonFormat] = jsonFormat3(ProviderDataPoint[T])

  val log = system.log

  lazy val graphiteClient = GraphiteClientActor.connect("graphite.docker", 10001)

  val serverBinding = Http().bindAndHandle(interface = "0.0.0.0", port = 8080, handler = mainFlow)

  def mainFlow(implicit system: ActorSystem, timeout: Timeout, executor: ExecutionContext): Route = {
    log.info("Starting awesomeness")

    def clientStaticResources = getFromDirectory("client")

    def controlsWebsocket= pathPrefix("api") {
      path("ws") { handleWebsocketMessages(controlFlow) }
    }

    get {
      controlsWebsocket  ~
      clientStaticResources
    }
  }

  def controlFlow: Flow[Message, Message, Unit] = {
    Flow[Message].mapAsync(1) {
      case msg : TextMessage =>
        msg.textStream.runFold("")(_ + _)
          .map(_.parseJson.convertTo[ProviderDataPoint[GraphiteData]])
          .map(sendDataPointToGraphite)
          .map(_ => TextMessage("""{ "nice" : " answer " }"""))
//          .onFailure {
//            case e => log.error(e, "Failed to send data point to graphite.")
//          }

      case _ : BinaryMessage =>
        Future.successful(TextMessage("""{ "nice" : " answer " }"""))
    }
  }

  def sendDataPointToGraphite(dataPoint: ProviderDataPoint[GraphiteData]) = {
    graphiteClient.foreach { client =>
      client ! SendMetric(dataPoint.identifier, dataPoint.data.value)
    }
  }

}
