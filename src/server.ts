import { ApolloServer } from "apollo-server-express";

import app from "./express/express";
import { schema } from "./querying/graphQL/schema.graphql";

const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log("Now browse to http://localhost:4000" + server.graphqlPath)
);
