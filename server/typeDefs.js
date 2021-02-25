const { gql } = require('apollo-server');

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
		invitedBy: String,
		
	}

	type Message {
		messageID: String!
		content: String!
	}

	type Invite {
		email: String!
		from: User!
		createdAt: String!
	}

	input InviteInput {
		email: String!
	}

	input signinInput {
		email: String!
		password: String!
	}

	type Settings {
		id: ID!
		user: User!
		theme: Theme!
		pushNotifications: Boolean!
	}

	type Query {
		me: User!
		messages(receiverID: String): [Message]
		settings:Settings!,
		unRead:[Message]
		
	}

	type AuthUser {
		token: String!
		user: User!
	}
	input MessageInput {
		receiverID: String!
		content: String!
	} 

	input SettingsInput{
		theme:String
		pushNotifications:String  
	}

	type Mutation {
		signUp(input: signUpInput!): AuthUser!
		signIn(input: signinInput!): AuthUser!
		createMessage(input: MessageInput!): Message!
		updateSettings(input:SettingsInput):Settings!
	}

	input signUpInput {
		email: String!
		password: String!
		invitedBy: String
	}

	type Subscription {
		newMessages: [Message]
		newSignUp: AuthUser!
	}
`;

module.exports = typeDefs;
