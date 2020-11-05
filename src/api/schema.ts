import { makeSchema } from "@nexus/schema";
import { join } from "path";
import { GraphQLSchema } from "graphql";

import * as typeDefs from "./graphql/index";

export let schema: GraphQLSchema;

schema = makeSchema({
  types: typeDefs,
  outputs: {
    typegen: join(__dirname, "./generatedNexusFiles", "nexus-typegen.ts"),
    schema: join(__dirname, "./generatedNexusFiles", "schema.graphql"),
  },
});
