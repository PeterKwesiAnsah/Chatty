import React, { Fragment,useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import NavBar from './Navbar';
import Friend from './Friend';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import { addCurrentUserID } from '../../../slices/user';
import { useDispatch } from 'react-redux';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '30%',
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

const SideView = ({ route }) => {
	//listen for new sgnUps
	const classes = useStyles();
	const dispatch = useDispatch();

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
				id
				friends {
					id
					email
				}
			}
		}
	`;

	//get friends query

	const { loading, data, error } = useQuery(GET_FRIENDS);

	// const friend = {
	// 	id: '6019cd76444a503194234438',
	// 	email: 'ansahPeter123@gmail.com',
	// };
	useEffect(() => {
		if (data) {
			dispatch(addCurrentUserID({ id: data.me.id }));
		}
	}, [data]);

	return (
		<div className={classes.root}>
			<NavBar></NavBar>
			<Fragment>
				<div className={classes.friendsBar}>
					{loading
						? skeleton
						: data.me.friends &&
						  data.me.friends.map((friend) => (
								<Link to={route + '/' + friend.id} key={friend.id}>
									<Friend friend={friend}></Friend>
								</Link>
						  ))}
				</div>
			</Fragment>
		</div>
	);
};

export default SideView;
