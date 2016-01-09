name := """MonitorControl"""

version := "1.1"

scalaVersion := "2.11.7"

val streamV = "2.0-M1"
val akkaV = "2.4.0"

libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-actor" % akkaV,
  "com.typesafe.akka" %% "akka-http-spray-json-experimental" % streamV,
  "com.typesafe.akka" %% "akka-http-experimental" % streamV,
  "com.typesafe.akka" %% "akka-stream-experimental" % streamV,
  "com.typesafe.akka" %% "akka-slf4j" % akkaV,
  "io.spray" %% "spray-json" % "1.3.2",
  "ch.qos.logback" % "logback-classic" % "1.1.3"
)

fork in run := true
