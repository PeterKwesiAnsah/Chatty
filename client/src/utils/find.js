const find = (state,receiverID) =>
	state.find(({ friendID }) => friendID === receiverID)?.messages || [];

export default find;
