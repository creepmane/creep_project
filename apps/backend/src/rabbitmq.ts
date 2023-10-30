import { connect } from 'amqplib';

const setupQueue = async () => {
  const connection = await connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertQueue('my-queue');
};

export default setupQueue;