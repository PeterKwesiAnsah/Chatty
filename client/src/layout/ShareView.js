import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Navbar from './home/components/Navbar';
import { gql, useQuery } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100%',
	},
	linkMessage: {
		width: '100%',
		display: 'grid',
		placeItems: 'center',
		margin: theme.spacing(10, 0),
	},
    skeleton:{
        width:'70%',
        height:theme.spacing(8)
    }
}));
const Share = () => {
	const classes = useStyles();
	//get user query
	const GET_ME = gql`
		query getMe {
			me {
				id
			}
		}
	`;
	const { loading, error, data } = useQuery(GET_ME);

	return (
		<div className={classes.root}>
			<Navbar></Navbar>
			<div className={classes.linkMessage}>
				<Typography variant="h2">
					Hey You,
					<Typography variant="h2" color="primary" display="inline">
						Welcome!
					</Typography>
				</Typography>
				{true ? <Skeleton animation="wave" variant="text" className={classes.skeleton}></Skeleton> : <Typography>{
                    ''}</Typography>}
			</div>
		</div>
	);
};

export default Share;
