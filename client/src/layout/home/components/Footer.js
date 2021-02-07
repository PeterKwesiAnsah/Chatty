import React from 'react';
import { makeStyles, Typography, SvgIcon, Grid } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import logo from '../../../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		textAlign: 'center',
		padding: theme.spacing(14, 0),
		borderTop: '1px solid grey',
	},
	socials: {
        '& > a':{
            marginRight:theme.spacing(4)
        }
    },
	logos: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',

		'& > img': {
			marginRight: theme.spacing(4),
		},
    },
    copyright:{
        marginTop:theme.spacing(12)
    }
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container alignItems="center">
				<Grid item  xs={12} sm={12} md={6} lg={6} alignItems="center">
					<div className={classes.logos}>
						<img src={logo} alt="Chatty-Just Send it"></img>
						<Typography variant="h4" color="secondary" display="inline">
							Chatty
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<div className={classes.socials}>
						<a href="tel:0507140689">
							<SvgIcon fontSize="large" htmlColor="#fff">
								<PhoneIcon></PhoneIcon>
							</SvgIcon>
						</a>

						<a
							href="https://github.com/PeterKwesiAnsah"
							target="_blank"
							rel="noreferrer"
						>
							<SvgIcon htmlColor="#fff" fontSize="large">
								<GitHubIcon></GitHubIcon>
							</SvgIcon>
						</a>

						<a
							href="https://twitter.com/akwesi_ansah"
							target="_blank"
							rel="noreferrer"
						>
							<SvgIcon htmlColor="#fff" fontSize="large">
								<TwitterIcon></TwitterIcon>
							</SvgIcon>
						</a>
					</div>
				</Grid>
			</Grid>
            <Typography varint="h6" className={classes.copyright}>Copyright &#169; 2021 All Rights Reserved.</Typography>
		</div>
	);
};

export default Footer;
