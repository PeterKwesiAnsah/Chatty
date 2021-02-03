const mongoose = require('mongoose');

const connect = async () => {
	try {
		const connection = await mongoose.connect(
			'mongodb+srv://Kwesi_Ansah:Engine1234@cluster0.kx61l.mongodb.net/chatty?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			}
		);

		console.log('Database connected successfully');
		return connection;
	} catch (e) {
		console.log(e);
	}
};

module.exports = connect;
