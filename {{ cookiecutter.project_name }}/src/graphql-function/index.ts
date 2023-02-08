import { resolve } from "path";
import { readFileSync } from "fs";
import { ApolloServer } from '@apollo/server';
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from '@as-integrations/aws-lambda';
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";

import resolvers from "../resolvers";


const schemaPath = resolve(__dirname, "..", "..", "schema.graphql");
const typeDefs = gql(
  readFileSync(schemaPath, { encoding: "utf-8" })
);

const server = new ApolloServer({ schema: buildSubgraphSchema({ typeDefs, resolvers }) });

export const handler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventRequestHandler(),
);