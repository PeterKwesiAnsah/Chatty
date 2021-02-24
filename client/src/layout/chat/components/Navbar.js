import React from 'react';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { makeStyles, IconButton } from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: '#2F3135',
		padding: theme.spacing(0.2),
        color:theme.palette.common.white
	},
}));

const Navbar = () => {
	const classes = useStyles();
    console.log(useTheme())
	return (
		<div className={classes.root}>
			<IconButton color="inherit">
				<ClearAllIcon fontSize="large"></ClearAllIcon>
			</IconButton>
		</div>
	);
};

export default Navbar;
