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
		backgroundColor: theme.palette.primary.dark,
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
		padding: theme.spacing(2, 3),
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
	// const {loading,data,error}=useQuery()

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
					{/* <Skeleton
						variant="text"
						animation="wave"
						className={classes.skeleton}
					/> */}
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
					{/* <Skeleton
						variant="text"
						animation="wave"
						className={classes.skeleton}
					/> */}
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

	const friend = {
		id: '6019cd76444a503194234438',
		email: 'ansahPeter123@gmail.com',
	};

	return (
		<div className={classes.root}>
			<NavBar></NavBar>
			<div className={classes.friendsBar}>
				<Friend friend={friend}></Friend>
			</div>
		</div>
	);
};

export default SideView;
