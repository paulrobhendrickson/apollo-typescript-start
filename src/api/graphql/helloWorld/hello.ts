import { stringArg, queryType } from "@nexus/schema";

export const Query = queryType({
  definition(t) {
    t.string("hello", {
      args: { name: stringArg({ nullable: true }) },
      resolve: (_root, args) => `Hello ${args.name || "World"}!`,
    });
  },
});
