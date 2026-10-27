import axios from "axios";
import axiosRetry from "axios-retry";
import { logger } from "src/utils/logger";

const catalogClient = axios.create({
  timeout: 5000,
});

axiosRetry(catalogClient, {
  retries: 3,
  retryCondition: (err) => {
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(err) ||
      (err.response ? err.response.status >= 500 : false)
    );
  },
  retryDelay: (retryCount) => {
    return axiosRetry.exponentialDelay(retryCount);
  },
  onRetry: (retryCount, err) => {
    logger.warn(
      `[Payment Service -> Catalog Service]: Retry #${retryCount} due to error: ${err.message}`,
    );
  },
});

export async function handleSuccessfulPayment(
  paymentId: string,
  carId: string,
  userId: string,
): Promise<boolean> {
  try {
    logger.info(
      `[Payment Service]: Payment ${paymentId} successful. Updating status for car ${carId}...`,
    );
    const catalogServiceHost = process.env.CSHOST;
    const catalogServicePort = process.env.CSPORT;

    if (!catalogServiceHost || !catalogServicePort) {
      throw new Error(
        "Catalog service host or port is not defined in enviroment variables!",
      );
    }

    const response = await catalogClient.patch(
      `${catalogServiceHost}:${catalogServicePort}/api/v1/catalog/${carId}/status`,
      {
        is_available: "false",
      },
      {
        headers: {
          "X-Internal-Service": "payment-service",
          "X-User-Id": userId,
        },
      },
    );
    logger.info(
      `[Payment Service]: Status car is updated. Response catalog:`,
      response.data,
    );
    return true;
  } catch (err: any) {
    logger.error(
      `[Payment Service]: Failed to updated car status in catalog:`,
      err.message,
    );
    throw new Error(
      `Status car is not updated after payment. Original error: ${err.message}`,
    );
  }
}
