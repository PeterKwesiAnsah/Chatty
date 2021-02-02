const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
	Mutation: {
		signUp: async (
			_,
			{ input },
			{ createToken, models }
		) => {
            const {email,password,invitedBy}=input
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
			const token = createToken(user);

			return {    
				token,
				user,
			};
		},
		//use User.id to generate a token
		//return the user and token
	},
};
