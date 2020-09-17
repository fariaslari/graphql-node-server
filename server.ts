import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import { makeExecutableSchema } from 'graphql-tools';
import { Resolvers } from './graphql/resolvers';
import { Types } from './graphql/types';

const port = 3000;
const app: express.Application = express();

const typeDefs = new Types().getDefinition();
const resolvers = new Resolvers().getConfig();

app.use(cors())

app.use(
  '/graphi',
  graphqlHTTP({
      schema: makeExecutableSchema({
        typeDefs, 
        resolvers
      }),
      graphiql: true
  })
);

app.use(
  '/graphql',
  graphqlHTTP({
      schema: makeExecutableSchema({
        typeDefs, 
        resolvers
      }),
      graphiql: false
  })
);

app.listen(port, () => console.log(`Node Graphql API listening on port ${port}!`));
