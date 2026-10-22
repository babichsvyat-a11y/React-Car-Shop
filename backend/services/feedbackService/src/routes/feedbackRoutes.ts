import { type FastifyPluginAsync } from "fastify";
import prisma from "src/config/prismaClient";
import feedbackQueue from "src/queues/feedbackQueue";
import { emailSchema } from "src/schems/email.schema";
import { phoneSchema } from "src/schems/phone.schema";
import { z } from "zod";

const feedbackRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.get("/api/v1/feedback/callbacks", async (request, reply) => {
    const result = await prisma.callbackTask.findMany();
    if (!result) {
      return reply.status(400).send({
        error: "DB feedback failed!",
      });
    }

    return reply.status(201).send({
      message: "Callback list is done",
      data: result,
    });
  });

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
