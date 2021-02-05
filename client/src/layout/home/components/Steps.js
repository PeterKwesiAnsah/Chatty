import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		width: '100%',
        backgroundColor: '#303030',
        height:'160px'
	},
});

const Steps = () => {
	const classes = useStyles();
	return <div className={classes.root}></div>;
};

export default Steps;
