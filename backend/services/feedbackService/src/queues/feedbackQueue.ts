import { Queue } from "bullmq";

const feedbackQueue = new Queue("feedbackqueue", {
  connection: {
    host: process.env.FEEDBACK_REDIS_HOST || "feedback_redis",
    port: Number(process.env.FEEDBACK_REDIS_PORT) || 6380,
  },
});

export default feedbackQueue;
