import React from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
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
		},
		'& a': {
			color: 'inherit',
		},
	},
	imgBlock: {
		height: theme.spacing(6),
		width: theme.spacing(6),
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
}));

//https://cdn.svgporn.com/logos/akka.svg
const Navbar = () => {
	const classes = useStlyes();

	return (
		<div className={classes.root}>
			<div className={classes.imgBlock}>
				<img
					src={logo}
					alt="Just Send An Invite"
					className={classes.img}   
				></img>
			</div>
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/signUp"><Typography variant="h6" style={{fontSize:'1.05rem'}}>SignUp</Typography></Link>
						</li>
						<li>
							<Button href="/login" variant="outlined" className={classes.btn}>
								<Typography variant="span">Login</Typography>
							</Button>
						</li>
					</ul>
				</nav>
			</Router>
		</div>
	);
};

export default Navbar;
