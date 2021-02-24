import { createMuiTheme } from '@material-ui/core/styles';
// import theme from './theme';

const chatTheme = createMuiTheme({
	palette: {
		common:{
			type:"dark"    
		},
		primary: {
			main: '#2F3135',
		},
		secondary: {
			main: '#4A545C',
		},
	},
});
export default chatTheme;
