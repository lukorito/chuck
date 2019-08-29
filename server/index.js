const { ApolloServer, gql  } = require('apollo-server-express');
const schema = require('./schema');
const resolvers = require('./resolvers');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 4000
const path = '/graphql';
const server = new ApolloServer({
  typeDefs: schema,
  resolvers });

server.applyMiddleware({ app, path  }); 

app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
)

