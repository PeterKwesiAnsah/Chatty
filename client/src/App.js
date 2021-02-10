import Home from './layout/home/Home';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import GlobalStyles from './GlobalStyles';
import theme from './theme/theme.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>
			<GlobalStyles></GlobalStyles>
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home></Home>
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
