import React from 'react';
import { makeStyles } from '@material-ui/core';
import NavBar from './Navbar';
import Friend from './Friend';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '35%',
		height: '100%',
	},
	friendsBar: {
		width: '100%',
		height: '90%',
	},
	skeleton: {
		backgroundColor: theme.palette.secondary.dark,
	},
}));

const SideView = () => {
	//listen for new sgnUps

	//get user query
	const GET_FRIENDS = gql`
		query getFriends {
			me {
				friends {
					id
					email
				}
			}
		}
	`;
	const classes = useStyles();
	//get friends query

	return (
		<div className={classes.root}>
			<NavBar></NavBar>
			<div className={classes.friendsBar}>
				<Skeleton variant="circle" width={65} height={65} />
			</div>
		</div>
	);
};

export default SideView;
