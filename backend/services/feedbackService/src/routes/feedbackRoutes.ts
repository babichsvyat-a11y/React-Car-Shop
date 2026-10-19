import Fastify, { type FastifyPluginAsync } from "fastify";
import feedbackQueue from "src/queues/feedbackQueue";
import { phoneSchema } from "src/schems/phone.schema";
import { z } from "zod";

const fastify = Fastify({
  logger: true,
});

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
};

export default feedbackRoutes;
