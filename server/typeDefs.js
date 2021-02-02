const { gql } = require('graphql');

//creatng type Definations
const typeDefs = gql`
	enum Theme {
		DARK
		LIGHT
	}

	type User {
		id: ID!
		email: String!
		friends: [User]
		createdByInvite: boolean!
	}

	type Message {
		id: String!
		content: String!
	}

	type Invite {
		email: String!
		from: User!
		createdAt: String!
	}

	input MessageInput {
		id: String!
		content: String!
	}

	input InviteInput {
		email: String!
		from: User!
	}
	
	input signinInput{
		email:String!
		password:String!
	}

	type Settings {
		id: ID!
		user: User!
		theme: Theme!
		pushNotifications: Boolean!
	}
`;