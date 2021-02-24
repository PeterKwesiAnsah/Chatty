import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Messages from './Messages';
import { makeStyles } from '@material-ui/core';
import wa

const useStyles = makeStyles((theme) => ({
	root: {
		width: '70%',
		height: '100%',
	},
    wallPaper:{

    }
}));
const ChatRoutes = ({ friends, route }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Switch>
				<Route path={route + '/'}>
					<div></div>
				</Route>
				<Route path={route + '/:friendID'}>
					<Messages></Messages>
				</Route>
			</Switch>
		</div>
	);
};

export default ChatRoutes;
