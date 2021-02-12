import React from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useLocation } from 'react-router-dom';
const useStlyes = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: theme.spacing(2),
		justifyContent: 'space-around',
		alignItems: 'center',
		'& ul': {
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
		},
		'& nav': {
			marginLeft: 'auto',
			width: '30%',
			height: '30%',
			'@media only screen and (max-width:62.5em)': {
				display: 'none',
			},
		},
		'& a': {
			color: 'inherit',
			// '@media only screen and (max-width:62.5em)': {
			// 	marginLeft: theme.spacing(2),
			// },
		},
	},
	imgBlock: {
		height: theme.spacing(6),
		width: theme.spacing(6),
		'@media only screen and (max-width:62.5em)': {
			height: theme.spacing(5),
			width: theme.spacing(5),
		},
	},
	img: {
		width: '100%',
		height: '100%',
	},
	btn: {
		borderColor: theme.palette.primary.dark,
		fontSize: theme.spacing(1.8),
		borderRadius: theme.spacing(3),
		textTransform: 'none',
	},
	typo: {
		fontSize: '1.05rem',
		borderBottom: '2px solid #fff',
	},
}));

//https://cdn.svgporn.com/logos/akka.svg
const Navbar = () => {
	const classes = useStlyes();

	//location
	const { pathname } = useLocation();

	return (
		<div className={classes.root}>
			<div className={classes.imgBlock}>
				<a href="/" alt="logo">
					<img
						src={logo}
						alt="Just Send An Invite"
						className={classes.img}
					></img>
				</a>
			</div>
			<>
				<nav>
					<ul>
						{!(pathname.includes('signUp') || pathname !== '/') && (
							<li>
								<Link to="/signUp">
									<Typography
										variant="h6"
										color="primary"
										className={classes.typo}
									>
										SignUp
									</Typography>
								</Link>
							</li>
						)}

						<li>
							<Button href="/login" variant="outlined" className={classes.btn}>
								<Typography>Login</Typography>
							</Button>
						</li>
					</ul>
				</nav>
			</>
		</div>
	);
};

export default Navbar;
