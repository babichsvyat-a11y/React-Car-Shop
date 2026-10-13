import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./src/graphql/resolvers/auth.resolvers";
import { logger } from "./src/utils/logger";
import { createContext } from "./src/graphql/auth.context";

const PORT = process.env.PORT || 5081;
const HOST = process.env.HOST || "0.0.0.0";

const typeDefs = loadSchemaSync("./src/graphql/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const schema = makeExecutableSchema({ typeDefs, resolvers });

const yoga = createYoga({
  schema,
  context: createContext,
  cors: {
    origin: process.env.FRONTEND_HOST,
    credentials: true,
    methods: ["POST", "GET", "OPTIONS"],
  },
});

const server = createServer(yoga);

server.listen(Number(PORT), HOST, () => {
  logger.info(`Server is running on http://localhost:${PORT}/graphql`);
});
