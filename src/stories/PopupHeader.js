import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PopupHeader from '../components/PopupHeader/PopupHeader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiThemebtn = getMuiTheme();

storiesOf('App/PopupHeader', module).add('close popup', () => {
	return (
		<div>
			<MuiThemeProvider muiTheme={muiThemebtn}>
				<PopupHeader closePopup={action('close popup')} />
			</MuiThemeProvider>
		</div>
	);
});
