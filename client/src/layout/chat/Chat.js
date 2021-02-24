import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { useRouteMatch } from 'react-router-dom';
import ChatRoutes from './components/ChatRoutes';
import SideView from './components/SideView';
import chatTheme from '../../theme/chatTheme'

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
		<ThemeProvider theme={chatTheme}>
			<div className={classes.root}>
				<SideView></SideView>
				<ChatRoutes route={match.url}></ChatRoutes>
			</div>
		</ThemeProvider>
	);
};

export default Chat;
