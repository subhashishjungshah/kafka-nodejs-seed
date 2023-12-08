const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "pathau-app",
  brokers: ["192.168.1.107:9092"],
});
