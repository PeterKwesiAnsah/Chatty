const jwt = require('jsonwebtoken');
const secret = 'catpack';

/**
 * takes a user object and creates  jwt out of it
 * using user.id and user.role
 * @param {Object} user the user to create a jwt for
 */

const createToken = ({ id }) => jwt.sign({ id }, secret);

/**
 * will attemp to verify a jwt and find a user in the
 * db associated with it. Catches any error and returns
 * a null user
 * @param {String} token jwt from client
 */
const getUserFromToken = (token) => {
	try {
		const user = jwt.verify(token, secret);
		return models.User.findOne({ id: user.id });
	} catch (e) {
		return null;
	}
};

module.exports = { createToken, getUserFromToken };
