import Home from './layout/home/Home';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyles from './GlobalStyles';
import theme from './theme/theme.js';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles></GlobalStyles>
			<>
				<Home></Home>
			</>
		</ThemeProvider>
	);
}

export default App;
