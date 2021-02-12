import React from 'react';
import NavBar from '../layout/home/components/Navbar';
import { makeStyles, TextField, Typography } from '@material-ui/core';
import signUpImg from '../assets/signUpImg.jpg';

const useStyles = makeStyles((theme) => ({
	box: {
		display: 'flex',
		width: '100%',
	},
	form: {
		width: '100%',
		color:
			theme.palette.type === 'dark'
				? theme.palette.common.white
				: theme.palette.common.black,
		'& *': {
			color: 'white',
		},
	},

	textField: {
		// margin: theme.spacing(4, 0),

		marginBottom: theme.spacing(5),
		'& .MuiFormControl-root': {
			width: '100%',
		},
		'&:hover': {
			border: `0`,
		},

		'& input': {
			border: `1px solid ${theme.palette.secondary.dark}`,
			width: '100%',

			'&:focus': {
				border: '0',
			},
		},

		'& .MuiInputLabel-shrink': {
			transform: 'translate(12px, -18px) scale(0.9)',
		},
		'& .Mui-focused input:hover': {
			border: '0',
		},
	},
	imgBox: {
		width: '60%',
		height: '100vh',
		backgroundImage: `url(${signUpImg})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
		display: 'grid',
		placeItems: 'center',
	},
	img: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	signUp: {
		width: '40%',
	},
	header: {
		padding: theme.spacing(5),
	},
	formBox: {
		padding: theme.spacing(5),
	},
	'& fieldset .MuiOutlinedInput-root:hover': {
		borderColor: 'none'
	},
}));

const SignUpView = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.box}>
				<div className={classes.imgBox}>
					{/* <img src={signUpImg} alt="sign Up here" className={classes.img}></img> */}
					<Typography variant="h4">Just Send an Invite!.</Typography>
				</div>

				<div className={classes.signUp}>
					<NavBar></NavBar>
					<div className={classes.header}>
						<Typography variant="h4">
							Sign Up!, with{' '}
							<Typography variant="h4" color="secondary" display="inline">
								Chatty.
							</Typography>
						</Typography>
					</div>
					<div className={classes.formBox}>
						<form className={classes.form} noValidate autoComplete="off">
							<div className={classes.textField}>
								<TextField
									id="email"
									label="Email"
									variant="outlined"
									color="transparent"
									type="email"
								/>
							</div>
							<div className={classes.textField}>
								<TextField
									id="password"
									label="Password"
									variant="outlined"
									type="password"
								/>
							</div>
						</form>
					</div>
					{/* 
					<form className={classes.form} noValidate autoComplete="off">
						<div className={classes.textField}>
							<TextField id="email" label="Email" variant="outlined" />
						</div>
						<div className={classes.textField}>
							<TextField id="password" label="Password" variant="outlined" />
						</div>
					</form> */}
				</div>
			</div>
		</>
	);
};

export default SignUpView;
