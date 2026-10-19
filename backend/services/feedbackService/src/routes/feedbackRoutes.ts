import { type FastifyPluginAsync } from "fastify";
import feedbackQueue from "src/queues/feedbackQueue";
import { emailSchema } from "src/schems/email.schema";
import { phoneSchema } from "src/schems/phone.schema";
import { z } from "zod";

const feedbackRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.post("/api/v1/feedback/callback", async (request, reply) => {
    const result = phoneSchema.safeParse(request.body);

    if (!result.success) {
      return reply.status(400).send({
        error: "Validation failed",
        details: z.flattenError(result.error),
      });
    }

    const job = await feedbackQueue.add("create-callback", result.data);

    return reply.status(201).send({
      message: "Callback task queued successfully",
      jobId: job.id,
      data: job.data,
    });
  });

  fastify.post("/api/v1/feedback/notify", async (request, reply) => {
    const result = emailSchema.safeParse(request.body);

    if (!result.success) {
      return reply.status(400).send({
        error: "Validation failed",
        details: z.flattenError(result.error),
      });
    }

    const job = await feedbackQueue.add("create-notify", result.data);

    return reply.status(201).send({
      message: "Notify queued successfully",
      jobId: job.id,
      data: job.data,
    });
  });
};

export default feedbackRoutes;
