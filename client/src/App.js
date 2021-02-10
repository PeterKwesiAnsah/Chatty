import Home from './layout/home/Home';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import GlobalStyles from './GlobalStyles';
import theme from './theme/theme.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpView from './layout/SignUpView';
import LoginView from './layout/LoginView';
function App() {
	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>
			<GlobalStyles></GlobalStyles>
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home></Home>
					</Route>
					<Route path="/signUp">
						<SignUpView></SignUpView>
					</Route>
					<Route path="/login">
						<LoginView></LoginView>
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
