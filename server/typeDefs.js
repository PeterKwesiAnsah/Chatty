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
		friends: [User]!
		invitedBy:String
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
		messages:[Message]!
	}

	type AuthUser{
		token:String!
		user:User!

	}

	type Mutation{
		signUp(input:signinInput):AuthUser!
	}

	input signUpInput{
		email:String!
		password:String!
		invitedBy:String
	}

	

`;

module.exports=typeDefs
