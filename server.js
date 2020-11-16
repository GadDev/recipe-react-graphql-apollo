const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
};

require('dotenv').config({ path: 'variable.env' });

//Schemas
const Recipe = require('./models/Recipe');
const User = require('./models/User');

// Bring in GraphQL-express middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// Create Schema
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

//connects to the database
mongoose
	.connect(process.env.MONGO_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log('db connected');
	})
	.catch((error) => console.log(error));

// Initializes application
const app = express();

app.use(cors(corsOptions));
// create Graphiql application // Adding middleware function
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Connect Schemas with GraphQL // Adding middleware function // Adding the models to GraphQL
app.use(
	'/graphql',
	bodyParser.json(),
	graphqlExpress({ schema, context: { Recipe, User } })
);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`);
});
