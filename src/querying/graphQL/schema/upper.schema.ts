import { gql } from "apollo-server";
import { DocumentNode } from "graphql";

export const upperSchema: DocumentNode = gql`
  type Query {
    hello: String
  }
`;

export const upperResolver = {
  Query: {
    hello: () => "Hello, World!",
  },
};
