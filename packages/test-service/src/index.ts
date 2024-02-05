import { createSchema, createYoga } from "graphql-yoga";
import { readFileSync } from "node:fs";
import { createServer } from "node:http";

const schema = readFileSync("schema.graphql", "utf-8");

const tests = [
  {
    id: "0",
    name: "Sid",
    message: "Hello World!",
    __typename: "Test",
  },
  {
    id: "1",
    name: "Rick",
    message: "Hi World!",
    __typename: "Test",
  },
];

const resolvers = {
  Query: {
    test: () => tests,
  },
};

// Create your server
const yoga = createYoga({
  schema: createSchema({
    typeDefs: schema,
    resolvers,
  }),
});

const server = createServer(yoga);

server.listen(3005, () => {
  console.log(
    `🚀 Server ready at http://localhost:3005${yoga.graphqlEndpoint}`
  );
});
