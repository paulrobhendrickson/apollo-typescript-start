import { ApolloServer } from "apollo-server";

import { schema } from "./api/schema";

const server = new ApolloServer({ schema });

const port = process.env.PORT || 4000;

server.listen({ port }, () =>
  console.log("Now browse to http://localhost:" + port)
);
