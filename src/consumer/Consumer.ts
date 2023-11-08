import { Kafka, Consumer } from 'kafkajs';
import config from '../config/kafka.config';
import KafkaMessage from '../models/KafkaMessage';

class kafkaConsumer {
  private readonly consumer: Consumer;

  constructor() {
    const kafka = new Kafka({
      clientId: config.kafka.clientId,
      brokers: config.kafka.brokers,
    });
    this.consumer = kafka.consumer({ groupId: config.kafka.groupId });
  }

  async subscribe(
    topic: string,
    handler: (message: KafkaMessage) => void,
  ): Promise<void> {
    await this.consumer.connect();
    await this.consumer.subscribe({ fromBeginning: true, topic });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        const kafkaMessage = JSON.parse(message.value?.toString() || '');
        handler(kafkaMessage);
      },
    });
  }
}

export default kafkaConsumer;
