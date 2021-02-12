import { React, useState } from 'react';
import NavBar from '../layout/home/components/Navbar';
import { makeStyles, TextField, Typography, Button } from '@material-ui/core';
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
			transform: 'translate(12px, -18px) scale(0.75)',
		},
		'& .Mui-focused input:hover': {
			border: '0',
		},
		'& fieldset': {
			borderColor: 'antiquewhite !important',
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
}));

const SignUpView = () => {
	const classes = useStyles();

	//get User SignUp details
	const [userDetails, setUserDetails] = useState({
		email: '',
		password: '',
	});
	//for

	//handleOnChange
	const handleChange = ({ target }) => {
		setUserDetails({ ...userDetails, [target.name]: target.value });
	};
	console.log(userDetails);
	return (
		<>
			<div className={classes.box}>
				<div className={classes.imgBox}>
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
									name="email"
									label="Email"
									variant="outlined"
									type="email"
									value={userDetails.email}
									onChange={handleChange}
								/>
							</div>
							<div className={classes.textField}>
								<TextField
									label="Password"
									name="password"
									variant="outlined"
									type="password"
									value={userDetails.password}
									onChange={handleChange}
								/>
							</div>
						</form>
						<Button>
							<Typography>Sign Up</Typography>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUpView;
