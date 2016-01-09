package com.stackstate.monitorcontrol

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.ws.{Message, TextMessage}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server._
import akka.stream.ActorMaterializer
import akka.stream.scaladsl.Flow
import akka.util.Timeout

import scala.concurrent.ExecutionContext
import scala.concurrent.duration._

object Server extends App {

  implicit val system = ActorSystem("webapi")
  implicit val executor = system.dispatcher
  implicit val timeout = Timeout(1000.millis)
  implicit val materializer = ActorMaterializer()

  val log = system.log

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
    Flow[Message].map { _ =>  TextMessage("alain is a weirdo") }
  }

}
