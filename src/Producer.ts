import { Producer, Kafka, ProducerRecord } from 'kafkajs';
import config from './kafka.config';

class KafkaProducer {
  private producer: Producer;

  private constructor() {
    const kafka = new Kafka({
      clientId: config.kafka.clientId,
      brokers: config.kafka.brokers,
    });
    this.producer = kafka.producer();
  }

  async send(message: string): Promise<void> {
    await this.producer.connect();
    const producerRecord: ProducerRecord = {
      topic: config.kafka.topic,
      messages: [{ value: message }],
    };
    await this.producer.send(producerRecord);
    await this.producer.disconnect();
  }
}

export default KafkaProducer;
