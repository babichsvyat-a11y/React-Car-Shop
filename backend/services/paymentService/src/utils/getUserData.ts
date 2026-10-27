import axios from "axios";
import { logger } from "./logger";

export async function getUserContactData(
  userId: string,
): Promise<{ email: string; phone?: string; last_name: string } | null> {
  try {
    const authServiceHost = process.env.ASHOST;
    const authServicePort = process.env.ASPORT;

    if (!authServiceHost || !authServicePort) {
      throw new Error(
        "Auth service host or port is not defined in enviroment variables!",
      );
    }

    const graphqlQuery = {
      query: `
        query GetUserContacts($id: ID!) { 
          user(id: $id){ 
            email,
            phone,
            last_name,
          }
        }
      `,
      variables: {
        id: userId,
      },
    };

    const response = await axios.post(
      `${authServiceHost}:${authServicePort}/graphql`,
      graphqlQuery,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Internal-Service": "payment-service",
        },
      },
    );

    if (response.data.errors) {
      logger.error(
        `[Payment Service]: GraphQL error while fetching user ${userId}:`,
        response.data.errors,
      );
      return null;
    }

    const userData = response.data.data?.user;

    if (!userData) {
      logger.warn(
        `[Payment Service]: User with ID ${userId} not found in Auth Service.`,
      );
      return null;
    }

    return {
      email: userData.email,
      phone: userData.phone,
      last_name: userData.last_name,
    };
  } catch (err: any) {
    logger.error(
      `[Payment Service]: Failed to connect to Auth Service GraphQL:`,
      err.message,
    );
    return null;
  }
}
