import { Producer, Kafka, ProducerRecord, Message } from 'kafkajs';
import config from './kafka.config';
import KafkaMessage from './models/KafkaMessage';

class KafkaProducer {
  private readonly producer: Producer;

  constructor() {
    const kafka = new Kafka({
      clientId: config.kafka.clientId,
      brokers: config.kafka.brokers,
    });
    this.producer = kafka.producer();
  }

  async send(message: KafkaMessage, topic: string): Promise<void> {
    await this.producer.connect();
    const producerRecord: ProducerRecord = {
      topic: topic,
      messages: [{ value: JSON.stringify(message) }],
    };
    await this.producer.send(producerRecord);
    await this.producer.disconnect();
  }
}

export default KafkaProducer;
