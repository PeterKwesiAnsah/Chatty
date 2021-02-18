import {
	ApolloClient,
	HttpLink,
	ApolloLink,
	InMemoryCache,
	concat,
} from '@apollo/client';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/' });

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext({
		headers: {
			authorization: localStorage.getItem('token') || null,
		},
	});

	return forward(operation);
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: concat(authMiddleware, httpLink),
});

export default client;
