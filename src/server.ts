import { ApolloServer } from "apollo-server";

import { schema } from "./api/schema";

const server = new ApolloServer({ schema });

server.listen({ port: 4000 }, () =>
  console.log("Now browse to http://localhost:4000" + server.graphqlPath)
);
