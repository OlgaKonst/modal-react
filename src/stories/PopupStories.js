import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Popup from '../components/Popup/Popup';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../components/Popup/Popup.css';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const muiThemebtn = getMuiTheme();

storiesOf('App/Popup/FlatButton', module).add('button closes popup', () => {
	return (
		<div>
			<MuiThemeProvider muiTheme={muiThemebtn}>
				<FlatButton
					label="Отмена"
					primary={true}
					onClick={action('button closes popup')}
					style={{ color: '#000' }}
				/>
			</MuiThemeProvider>
		</div>
	);
}).add('button saves popup', () => {
	return (
		<div>
			<MuiThemeProvider muiTheme={muiThemebtn}>
			<RaisedButton label="Сохранить" primary={true} 
				keyboardFocused={true}
				onClick={action('button saves popup')} />
			</MuiThemeProvider>
		</div>
	)
});
