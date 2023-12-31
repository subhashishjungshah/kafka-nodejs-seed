# Node.js with Kafka Learning Repository

This repository serves as a learning resource for understanding the integration of Node.js with Apache Kafka. It includes code samples, tutorials, and additional resources to help developers get started with building applications that utilize Kafka messaging.

## Introduction

This repository is created as part of the learning process to comprehend the interaction between Node.js and Kafka, exploring the fundamental concepts, setup procedures, and implementation examples.

## Topics Covered

- **Introduction to Apache Kafka**: Brief overview of Kafka's architecture and its role in building scalable and distributed systems.
- **Setting Up Kafka with Node.js**: Step-by-step instructions on setting up Kafka and integrating it with a Node.js environment.
- **Producer and Consumer**: Examples and explanations demonstrating how to create Kafka producers and consumers using Node.js.
- **Handling Events**: Insights into handling various events and messages in a Kafka-driven application.
- **Additional Resources**: Curated list of useful articles, tutorials, and links for further exploration.

## Getting Started

To get started with this repository, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:
   ```bash
   git clone https://github.com/subhashishjungshah/kafka-nodejs-seed.git
   ```
2. **Start Zookeeper container**: Pull zookeeper image and run inside your local machine:
   ```bash
   docker run -p 2181:2181 zookeeper -d
   ```
3. **Start Kafka Container**: Use the following commands to run kafka container:
   ```bash
      docker run -p 9092:9092 \
      -e KAFKA_ZOOKEEPER_CONNECT= <PRIVATE_IP>:2181 \
      -e KAFKA_ADVERTISED_LISTNERS= PLAINTEXT://<PRIVATE_IP>:9092 \
      -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1
      confluentinc/cp-kafka
   ```
