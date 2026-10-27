import type { FastifyReply, FastifyRequest } from "fastify";
import { logger } from "./logger";

export function requireInternalService(services: string | string[]) {
  const service = Array.isArray(services) ? services : [services];

  return async (request: FastifyRequest, reply: FastifyReply) => {
    const internalServiceHeaders = request.headers[
      "x-internal-service"
    ] as string;

    if (!internalServiceHeaders || !service.includes(internalServiceHeaders)) {
      logger.warn(
        `[Service Guard]: Access denied. Expected one of [${service.join(", ")}], got '${internalServiceHeaders}'`,
      );

      return reply.status(403).send({
        error: "Forbidden",
        message: `Access Denied: Requires one of [${service.join(", ")}]`,
      });
    }
  };
}
