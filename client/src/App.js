import Home from './layout/home/Home';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import GlobalStyles from './GlobalStyles';
import theme from './theme/theme.js';

function App() {
	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>
			<GlobalStyles></GlobalStyles>
			<>
				<Home></Home>
			</>
		</ThemeProvider>
	);
}

export default App;
