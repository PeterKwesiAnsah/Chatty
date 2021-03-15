const getTime = (unixTimestamp) => {
	if (unixTimestamp) {
		const dateObject = new Date(Number(unixTimestamp))
			.toLocaleTimeString()
			.split(':');

		return `${dateObject[0]}:${dateObject[1]}`;
	}
	const dateObject = new Date().toLocaleTimeString().split(':');
	return `${dateObject[0]}:${dateObject[1]}`;
};
export default getTime;
