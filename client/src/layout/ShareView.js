import React, { useState, Fragment, useRef } from 'react';
import {
	makeStyles,
	Typography,
	Button,
	Snackbar,
	IconButton,
} from '@material-ui/core';
import Navbar from './home/components/Navbar';
import { gql, useQuery } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';
import CopyToClipboard from 'react-copy-to-clipboard';

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
	skeleton: {
		width: '50%',
		height: theme.spacing(8),
		marginTop: theme.spacing(3),
		backgroundColor: '#80808029',
	},
	inviteBox: {
		marginTop: theme.spacing(3),
		textAlign: 'center',
	},
	invite: {
		padding: theme.spacing(0.5),
		backgroundColor: '#80808029',
		borderRadius: theme.spacing(1),
	},
	btn: {
		color: theme.palette.common.white,
		backgroundColor: '#80808029',
		textTransform: 'none',
		'&:hover': {
			backgroundColor: '#80808033',
		},
	},
	input: {
		width: '0',
		height: '0',
		opacity: 0,
	},
}));
const Share = () => {
	const classes = useStyles();

	// const InputEl = useRef();
	//Snackbar state
	const [open, setOpen] = useState(false);
	//get user query
	const GET_ME = gql`
		query getMe {
			me {
				id
			}
		}
	`;
	const { loading, error, data } = useQuery(GET_ME);

	const handleCopy = () => {
		
	};

	return (
		<div className={classes.root}>
			<Navbar></Navbar>
			<div className={classes.linkMessage}>
				<Typography variant="h2">
					Hey You,
					<Typography variant="h2" color="primary" display="inline">
						Welcome!
					</Typography>
					{/* <Typography variant="h4">Copy & Share!</Typography> */}
				</Typography>
				{loading ? (
					<Skeleton
						animation="wave"
						variant="text"
						className={classes.skeleton}
					></Skeleton>
				) : (
					<div className={classes.inviteBox}>

						<Typography variant="h6" className={classes.invite} paragraph>
							{'http://localhost:3000/signUp&inviteCode=' + data?.me.id}
						</Typography>
						<CopyToClipboard
							onCopy={handleCopy}
							text={'http://localhost:3000/signUp&inviteCode=' + data?.me.id}
						>
							<Button variant="contained" className={classes.btn}>
								<Typography>Copy</Typography>
							</Button>
						</CopyToClipboard>
					</div>
				)}
			</div>
		</div>
	);
};

export default Share;
