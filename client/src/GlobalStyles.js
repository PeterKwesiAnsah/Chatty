import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
	createStyles({
		'@global': {
			'*': {
				boxSizing: 'border-box',
				margin: 0,
				padding: 0,
			},
			html: {
				'-webkit-font-smoothing': 'antialiased',
				'-moz-osx-font-smoothing': 'grayscale',
				height: '100%',
				width: '100%',
			},
			body: {
				backgroundColor: `${
					theme.palette.common.type === 'dark' ? '#212121' : '#ffffff'
				}`,
				height: '100%',
				width: '100%',
				color: `${
					theme.palette.common.type === 'dark' ? '#ffffff' : '#000000'
				}`,

		
			},
			a: {
				textDecoration: 'none',
				color:'inherit'
			},
			li: {
				listStyle: 'none',
			},

			'#root': {
				height: '100%',
				width: '100%',
			},
		},
	})
);

const GlobalStyles = () => {
	useStyles();

	return null;
};

export default GlobalStyles;
