import React,{memo} from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '93%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
	},
}));

const ChatBox = ({ wallPaper }) => {
	const classes = useStyles();

	//subscription
	return (
		<>
			<div
				style={{ backgroundImage: `url(${wallPaper})` }}
				className={classes.root}
			></div>
		</>
	);
};

export default memo(ChatBox);
