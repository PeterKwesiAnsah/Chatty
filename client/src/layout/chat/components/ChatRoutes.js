import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { makeStyles,Typography } from '@material-ui/core';
import wallPaperFour from '../../../assets/wallPaperFour.jpg';
import Container from './Container'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '65%',
		height: '100%',
	},
	wallPaper: {
		backgroundImage: `url(${wallPaperFour})`,
        width:'100%',
        height:'100%',
        backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
        display:'grid',
        placeItems:'center'
	},
    message:{
        backgroundColor:theme.palette.secondary.dark,
        padding:theme.spacing(0.5),
        borderRadius:theme.spacing(1)
    }
}));
const ChatRoutes = ({ friends, route }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Switch>
				<Route path={route + '/'} exact>
					<div className={classes.wallPaper}>
                        <Typography className={classes.message}>Select Chat to start Messaging</Typography>
                    </div>
				</Route>
				<Route path={route + '/:friendID'}>
					<Container wallPaper={wallPaperFour}></Container>
				</Route>
			</Switch>
		</div>
	);
};

export default ChatRoutes;
