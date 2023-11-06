# Node.js Kafka Service with TypeScript

![Kafka Logo](https://kafka.apache.org/logos/kafka_logo--simple.png)

A Kafka service implemented in Node.js with TypeScript. This service demonstrates a simple Kafka producer and consumer using the [kafka-node](https://www.npmjs.com/package/kafka-node) library. It follows an object-oriented programming (OOP) approach and adheres to enterprise standards.

## Table of Contents

- Features
- Project Structure
- Setup
- Usage
- Additional Features
- Contributing
- License

## Features

- Kafka producer for sending messages to a Kafka topic.
- Kafka consumer for receiving and processing messages from the same topic.
- Object-oriented programming approach.
- Configurable Kafka broker and topic settings.
- Error handling and logging.

## Project Structure

The project is structured as follows:

```md
kafka-service/
├── src/
│ ├── config/
│ │ ├── kafka.config.ts
│ ├── producer/
│ │ ├── KafkaProducer.ts
│ ├── consumer/
│ │ ├── KafkaConsumer.ts
│ ├── models/
│ │ ├── KafkaMessage.ts
│ ├── app.ts
```

- `config/kafka.config.ts`: Kafka configuration settings.
- `producer/KafkaProducer.ts`: Kafka producer class.
- `consumer/KafkaConsumer.ts`: Kafka consumer class.
- `models/KafkaMessage.ts`: Message model.
- `app.ts`: Application entry point.

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/kafka-service.git
cd kafka-service
```

2. Install dependencies:

```bash
npm install
```

## Usage

To use the Kafka producer, import the `KafkaProducer` class and call the `send` method to send a message:

```typescript
import KafkaProducer from './producer/KafkaProducer';

const producer = KafkaProducer.getInstance();
producer
  .send('Hello, Kafka!')
  .then(() => console.log('Message sent'))
  .catch((error) => console.error('Error sending message:', error));
```

The Kafka consumer is started automatically when you run the application.

## Contributing

If you'd like to contribute to this project, please follow the contribution guidelines.

## License

This project is licensed under the MIT License.
