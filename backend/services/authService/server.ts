import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./src/graphql/resolvers/auth.resolvers";
import { logger } from "./src/utils/logger";
import { createContext } from "./src/graphql/auth.context";

const typeDefs = loadSchemaSync("./src/graphql/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const schema = makeExecutableSchema({ typeDefs, resolvers });

const yoga = createYoga({ schema, context: createContext });

const server = createServer(yoga);

server.listen(5081, () => {
  logger.info("Server is running on http://localhost:5081/graphql");
});
