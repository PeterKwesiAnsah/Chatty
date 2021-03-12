const getTime = (unixTimestamp) => {
	// const milliseconds = unixTimestamp * 1000;

	// const timeArray = new Date(milliseconds).toLocaleTimeString();
	// console.log(timeArray);

	// 	const unixTimestamp = 1575909015
	// 1615511236006

	// const milliseconds = 1575909015 * 1000 // 1575909015000

	const dateObject = new Date(Number(unixTimestamp))
		.toLocaleTimeString()
		.split(':');

	return `${dateObject[0]}:${dateObject[1]}`;
};
export default getTime;
