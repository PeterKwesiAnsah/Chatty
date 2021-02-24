import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import ChatRoutes from './components/ChatRoutes';
import SideView from './components/SideView';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
	},
}));

const Chat = () => {
	const classes = useStyles();

	//route match of parent route
	const match = useRouteMatch();
	return (
		<div className={classes.root}>
			<SideView></SideView>
			<ChatRoutes route={match.url}></ChatRoutes>
		</div>
	);
};

export default Chat;
