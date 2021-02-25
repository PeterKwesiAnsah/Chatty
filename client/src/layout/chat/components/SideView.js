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
		// padding:theme.spacing(2)
		'&::after': {
			background:
				'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.04), transparent)',
		},
	},
	skeletonRoot: {
		display: 'flex',
		padding: theme.spacing(2.5, 1),
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	skeletonBottom: {
		width: '70%',
		display: 'flex',
		flexDirection: 'column',
	},
}));

const SideView = () => {
	//listen for new sgnUps
	const classes = useStyles();

	const skeleton = (
		<>
			<div className={classes.skeletonRoot}>
				<Skeleton
					variant="circle"
					width={65}
					height={65}
					className={classes.skeleton}
					animation="wave"
				/>
				<div className={classes.skeletonBottom}>
					<Skeleton
						variant="text"
						animation="wave"
						className={classes.skeleton}
						width={120}
						style={{ marginBottom: '8px' }}
					/>
					<Skeleton
						variant="text"
						animation="wave"
						className={classes.skeleton}
					/>
				</div>
			</div>
			<div className={classes.skeletonRoot}>
				<Skeleton
					variant="circle"
					width={65}
					height={65}
					className={classes.skeleton}
					animation="wave"
				/>
				<div className={classes.skeletonBottom}>
					<Skeleton
						variant="text"
						animation="wave"
						className={classes.skeleton}
						width={120}
						style={{ marginBottom: '8px' }}
					/>
					<Skeleton
						variant="text"
						animation="wave"
						className={classes.skeleton}
					/>
				</div>
			</div>
		</>
	);

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

	//get friends query

	return (
		<div className={classes.root}>
			<NavBar></NavBar>
			<div className={classes.friendsBar}>{skeleton}</div>
		</div>
	);
};

export default SideView;
