const bcrypt = require('bcrypt');
const saltRounds = 10;
const { PubSub } = require('apollo-server');

const pubsub = new PubSub();

const NEW_MESSAGE = 'NEW_MESSAGE';
const NEW_SIGNUP = 'NEW_SIGNUP_BY INVITE';

module.exports = {
	Mutation: {
		signUp: async (_, { input }, { createToken, models }) => {
			const { email, password, invitedBy } = input;

			//generating hash password
			const salt = await bcrypt.genSalt(saltRounds);
			const hash = await bcrypt.hash(password, salt);
			//creating a user
			const user = await models.User.create({
				email,
				password: hash,
				invitedBy,
			});

			//creating a token for the User
			//use User.id to generate a token
			//return the user and token
			const token = createToken(user);

			if (!invitedBy) {
				pubsub.publish(NEW_SIGNUP, { newSignUp: { token, user } });
			}

			return {
				token,
				user,
			};
		},

		signIn: async (_, { input }, { user: loginUser, createToken, models }) => {
			console.log(loginUser);
			const { email, password } = input;
			const user = await models.User.findOne({ email });
			if (user) {
				//check to see if password and hashed password exist
				const match = await bcrypt.compare(password, user.password);
				if (match) {
					//create token
					const token = createToken(user);
					return {
						token,
						user,
					};
				}

				throw new Error('Try Again,Password is Incorrect');
			}

			throw new Error('Email or Password is Incorrect');
		},
		createMessage: (_, { input }, { user, models }) => {
			const { receiverID, content } = input;

			///a subscription can be placed here to get 20 messages from the userD/reciever ID combo

			const message = {
				messageID: user._id + '.' + receiverID,
				content,
			};

			pubsub.publish(NEW_MESSAGE, { newMessage: message });

			//save a message
			models.Message.create({
				messageID: user._id + '.' + receiverID,
				content,
			});
			return message;
		},
	},

	Query: {
		messages: async (_, { receiverID }, { user, models }) => {
			const messages = await models.Message.find({
				$or: [
					{ messageID: user._id + '.' + receiverID },
					{ messageID: receiverID + '.' + user._id },
				],
			});
			return messages;
		},
	},

	User: {
		friends: async ({ id, invitedBy }, __, { models }) => {
			const friends = await models.User.find({ invitedBy: id });
			if (invitedBy !== 'NoInvite') {
				const friend = await models.User.findById(invitedBy);
				return [...friends, friend];
			}
			return [...friends];
		},
	},

	Subscription: {
		newMessage: {
			subscribe: () => pubsub.asyncIterator([NEW_MESSAGE]),
		},
		newSignUp: {
			subscribe: () => pubsub.asyncIterator([NEW_SIGNUP]),
		},
	},
};
