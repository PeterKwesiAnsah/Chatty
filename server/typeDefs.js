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
		invitedBy: String
	}

	type Message {
		id: ID!
		messageID: String!
		content: String!
		read: Boolean
		createdAt: String!
		updatedAt: String!
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
		settings: Settings!
		unRead: [Message]

		# messages(receiverID: String): [FriendMessages]

		# unRead:[FriendMessages]
	}

	type AuthUser {
		token: String!
		user: User!
	}
	input MessageInfoArgs {
		id: ID!
		messageID: String!
	}

	type MessageInfo {
		id: ID!
		messageID: String!
	}
	input MessageInput {
		receiverID: String!
		content: String!
	}

	input SettingsInput {
		theme: String
		pushNotifications: String
	}

	type Mutation {
		signUp(input: signUpInput!): AuthUser!
		signIn(input: signinInput!): AuthUser!
		createMessage(input: MessageInput!): Message!
		updateMessage(input: MessageInfoArgs!): Message!
		updateSettings(input: SettingsInput): Settings!
	}

	input signUpInput {
		email: String!
		password: String!
		invitedBy: String
	}

	type Subscription {
		newMessage(userID: String!): Message
		newSignUp: AuthUser!
		readUpdate(userID: ID!): MessageInfo!
	}
	type FriendMessages {
		friendID: String!
		messages: [Message]
	}
`;

module.exports = typeDefs;
