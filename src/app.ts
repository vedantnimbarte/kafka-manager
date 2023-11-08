import KafkaProducer from './producer/Producer';
import KafkaConsumer from './consumer/Consumer';
import config from './config/kafka.config';

async function main() {
  const producer = new KafkaProducer();
  const consumer = new KafkaConsumer();

  // Producer
  await producer.send({ payload: 'Hello, Kafka!' }, config.kafka.topic);

  // Consumer
  await consumer.subscribe(config.kafka.topic, (message) => {
    console.log(message);
  });
}

main().catch((error) => {
  console.error('Error:', error);
});
