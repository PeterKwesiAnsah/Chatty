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
		invitedBy:String
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
		messages(receiverID:String):[Message]
	}

	type AuthUser{
		token:String!
		user:User!

	}
	input MessageInput{
		userID:String!
		receiverID:String!
		content:String!
	}

	type Mutation{
		signUp(input:signUpInput):AuthUser!
		signIn(input:signinInput):AuthUser!
		createMessage(input:MessageInput!):Message!
	}


	input signUpInput{
		email:String!
		password:String!
		invitedBy:String
	}

	

`;

module.exports=typeDefs
