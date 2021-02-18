import Home from './layout/home/Home';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import GlobalStyles from './GlobalStyles';
import theme from './theme/theme.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpView from './layout/SignUpView';
import LoginView from './layout/LoginView';
import { ApolloProvider } from '@apollo/client';
import client from './client';


function App() {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={responsiveFontSizes(theme)}>
				<GlobalStyles></GlobalStyles>
				<Router>
					<Switch>
						<Route path="/signUp">
							<SignUpView></SignUpView>
						</Route>
						<Route path="/signUp&inviteCode=:code">
							<SignUpView></SignUpView>
						</Route>
						<Route path="/login">
							<LoginView></LoginView>
						</Route>
						<Route path="/" exact>
							<Home></Home>
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
