const express = require('express')
const { graphqlHTTP } = require('express-graphql') // https://github.com/graphql/express-graphql
const cors = require('cors')
const schema = require('./schema')

const app = express();

//Allow cross-origin
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => console.log(`Server started on port ${PORT}`));