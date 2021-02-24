import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import ChatBox from './ChatBox';
const useStyles = makeStyles((theme) => ({
	textArea: {
		height: '7%',
		backgroundColor: theme.palette.primary.dark,
		display: 'grid',
		placeItems: 'center',

	},
    root:{
        width:'100%',
        height:'100%'
    },
	input:{
		border:'0',
		backgroundColor:'transparent',
		fontSize:'inherit',
		width:'90%',
		height:'100%',
		color:theme.palette.common.white,
		'&:focus':{
			outline:'0'
			
		}

	}
}));

const Container = ({ wallPaper }) => {
	const [message, setMessage] = useState('');
	const classes = useStyles();

	console.log(classes);

	//subscription
	return (
		<div className={classes.root}>
			<ChatBox wallPaper={wallPaper}></ChatBox>
			<div className={classes.textArea}>
				<input type="text" className={classes.input} value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message here "></input>
			</div>
		</div>
	);
};

export default Container
