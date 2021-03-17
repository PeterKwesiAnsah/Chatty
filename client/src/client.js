import {
	ApolloClient,
	HttpLink,
	ApolloLink,
	split,
	InMemoryCache,
	concat,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

import { WebSocketLink } from '@apollo/client/link/ws';


const wsLink = new WebSocketLink({
	uri: 'ws://localhost:4000/graphql',
	options: {
		reconnect: true,
	},
});

const httpLink = new HttpLink({
	uri: 'http://localhost:4000/',
	// headers: {
	// 	authorization: localStorage.getItem('token') || null,
	// },
});

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext({
		headers: {
			authorization: localStorage.getItem('token') || null,
		},
	});

	return forward(operation);
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: concat(authMiddleware, splitLink),
});

export default client;
