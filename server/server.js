const typeDefs = require('./typeDefs.js');
const connect = require('./models/connect.js');
const { ApolloServer } = require('apollo-server');
const { createToken, getUserFromToken } = require('./auth.js');
const resolvers = require('./resolvers.js');
const models = require('./models/Models.js');

//connect to database
connect();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: async ({ req }) => {
    const token = req.headers.authorization;
   
    const user = await getUserFromToken(token,models.User);

		return { user, createToken, getUserFromToken, models };
	},
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(` Server ready at ${url}`);
});
