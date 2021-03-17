import React from 'react';
import { makeStyles } from '@material-ui/core';

import ChatBox from './ChatBox';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100%',
	},
}));

const Container = ({ wallPaper }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ChatBox wallPaper={wallPaper}></ChatBox>
		</div>
	);
};

export default Container;
