import { Queue } from "bullmq";

const feedbackQueue = new Queue("feedbackqueue", {
  connection: {
    host: process.env.FEEDBACK_REDIS_HOST,
    port: Number(process.env.FEEDBACK_REDIS_PORT),
  },
});

export default feedbackQueue;
