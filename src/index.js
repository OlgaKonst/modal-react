import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiThemebtn = getMuiTheme();

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiThemebtn}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root'),
);
