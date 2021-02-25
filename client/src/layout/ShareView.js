import React, { useState, Fragment } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
	makeStyles,
	Typography,
	Button,
	Snackbar,
	IconButton,
} from '@material-ui/core';
import Navbar from './home/components/Navbar';
import { gql, useQuery, useSubscription } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useHistory } from 'react-router-dom';

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
		padding: theme.spacing(0.5, 2),
		backgroundColor: '#80808029',
		borderRadius: theme.spacing(1),
	},
	btn: {
		color: theme.palette.common.white,
		backgroundColor: '#80808029',
		textTransform: 'none',
		marginBottom: theme.spacing(3),
		'&:hover': {
			backgroundColor: '#80808033',
		},
	},
	note: {
		textDecoration: 'underline',
	},
}));
const NEW_SIGNUP = gql`
	subscription newSignUp {
		newSignUp {
			user {
				invitedBy
			}
		}
	}
`;

//get user query
const GET_ME = gql`
	query getMe {
		me {
			id
			friends {
				email
			}
		}
	}
`;
const Share = () => {
	const classes = useStyles();

	//History Object
	const history = useHistory();
	const { data: newSignUpData } = useSubscription(NEW_SIGNUP);
	// const InputEl = useRef();
	//Snackbar state
	const [open, setOpen] = useState(false);

	const { loading, error, data } = useQuery(GET_ME);

	//handles copy to clipboard
	const handleCopy = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	if (newSignUpData) {
		const { invitedBy } = newSignUpData.newSignUp.user;
		if (invitedBy === data.me.id) {
			console.log('you have a new signUp');

			
			history.push('/chat');
		}
	}

	return (
		<div className={classes.root}>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message="Invite Copied"
				action={
					<Fragment>
						<IconButton
							size="small"
							aria-label="close"
							color="inherit"
							onClick={handleClose}
						>
							<CloseIcon fontSize="small" />
						</IconButton>
					</Fragment>
				}
			/>
			<Navbar></Navbar>
			<div className={classes.linkMessage}>
				<Typography variant="h2">
					Hey You,
					<Typography variant="h2" color="primary" display="inline">
						Share!
					</Typography>
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
						{data.me.friends.length ? (
							<Typography variant="h6">
								You have a friend,
								<a href="/chat">
									<Typography color="primary" display="inline" variant="h6">
										Say Hi!
									</Typography>
								</a>
							</Typography>
						) : (
							<Typography variant="h6" className={classes.note}>
								Page automatically redirects as soon as a friend signs up.
							</Typography>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Share;
