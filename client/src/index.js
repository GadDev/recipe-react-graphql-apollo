import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import './index.css';
import App from './components/App';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
	uri: 'http://localhost:4444/graphql',
});

const Root = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/signin' component={Signin} />
			<Route path='/signup' component={Signup} />
			<Redirect to='/' />
		</Switch>
	</Router>
);
ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Root />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
