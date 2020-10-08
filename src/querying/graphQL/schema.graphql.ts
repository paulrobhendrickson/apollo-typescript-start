import { gql } from "apollo-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { DocumentNode, GraphQLSchema } from "graphql";
import { upperSchema, upperResolver } from "./schema/upper.schema";

export let schema: GraphQLSchema;
export const typeDefs: DocumentNode[] = [upperSchema];

schema = makeExecutableSchema({
  typeDefs,
  resolvers: [upperResolver],
});
