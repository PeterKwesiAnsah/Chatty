import React from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '35%',
		height: '100%',
	},
}));

const SideView = () => {
	const classes = useStyles();
	//get friends query

	return <div className={classes.root}></div>;
};

export default SideView;
