import React, { Fragment } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { makeStyles, Typography } from '@material-ui/core';
import wallPaperFour from '../../../assets/wallPaperFour.jpg';
import Container from './Container';
import { gql, useApolloClient } from '@apollo/client';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '70%',
		height: '100%',
	},
	wallPaper: {
		backgroundImage: `url(${wallPaperFour})`,
		width: '100%',
		height: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
		display: 'grid',
		placeItems: 'center',
	},
	message: {
		backgroundColor: theme.palette.secondary.dark,
		padding: theme.spacing(0.5),
		borderRadius: theme.spacing(1),
	},
}));

//get user query
const GET_FRIENDS = gql`
	query getFriends {
		me {
			id
			friends {
				id
				email
			}
		}
	}
`;
const ChatRoutes = ({ route }) => {
	const classes = useStyles();
	const client = useApolloClient();

	//read  data from cache
	const { me } = client.readQuery({
		query: GET_FRIENDS,
	}) || {};

	const friends = me?.friends || [];

	return (
		<div className={classes.root}>
			<Switch>
				<Route path={route + '/'} exact>
					<div className={classes.wallPaper}>
						<Typography className={classes.message}>
							Select Chat to start Messaging
						</Typography>
					</div>
				</Route>

				<Fragment>
					{friends.map(({ id }) => (
						<Route path={route + '/' + id} key={id}>
							<Container key={id} wallPaper={wallPaperFour}></Container>
						</Route>
					))}
				</Fragment>
			</Switch>
		</div>
	);
};
export default ChatRoutes;
