const getTime = (unixTimestamp) => {
	const milliseconds = unixTimestamp * 1000;

	const timeArray = new Date(milliseconds).toLocaleTimeString().split(':');
	return `${timeArray[0]}:${timeArray[1]}`;
};
export default getTime;
