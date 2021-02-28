import React, { useState, useEffect } from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import NearMeIcon from '@material-ui/icons/NearMe';
import ChatBox from './ChatBox';
const useStyles = makeStyles((theme) => ({
	textArea: {
		height: '10%',
		backgroundColor: theme.palette.primary.dark,
		display: 'flex',
		width:'100%',
		justifyContent:'space-between'
	},
	root: {
		width: '100%',
		height: '100%',
	},
	input: {
		border: '0',
		backgroundColor: 'transparent',
		fontSize: 'inherit',
		width: '70%',
		height: '100%',
		color: theme.palette.common.white,
		paddingLeft: theme.spacing(2),
		'&:focus': {
			outline: '0',
		},
	},
}));

const Container = ({ wallPaper }) => {
	const [message, setMessage] = useState('');
	const classes = useStyles();

	//create an enter key event
	const handleReturn = (e) => {
		if (e.keyCode === 13) {
			//enter is pressed...perform something
			console.log("hfhjhjshjhjdashj")
		}
	};
	
	const handleClick=()=>{
		
	}

	//return key event
	useEffect(() => {
		window.addEventListener('keyup', handleReturn);
	
		return () => {
			window.removeEventListener('keyup', handleReturn);
		};
	}, []);

	//subscription
	return (
		<div className={classes.root}>
			<ChatBox wallPaper={wallPaper}></ChatBox>
			<div className={classes.textArea}>
				<input
					type="text"
					className={classes.input}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Type your message here "
				></input>
				{message && (
					<IconButton color="secondary" onClick={handleClick}>
						<NearMeIcon fontSize="large" ></NearMeIcon>
					</IconButton>
				)}
			</div>
		</div>
	);
};

export default Container;
