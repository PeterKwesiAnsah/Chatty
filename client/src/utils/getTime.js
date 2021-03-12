const getTime = () => {
	const timeArray = new Date().toLocaleTimeString().split(':');
	return `${timeArray[0]}:${timeArray[1]}`;
}
export default getTime;    
