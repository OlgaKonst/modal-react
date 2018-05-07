import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from '../components/Form/Form';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../components/Form/Form.css';
import FlatButton from 'material-ui/FlatButton';

const muiThemebtn = getMuiTheme();

storiesOf('App/Popup/Form/FlatButton', module)
	.add('add numberitem', () => {
		return (
			<div>
				<MuiThemeProvider muiTheme={muiThemebtn}>
					<FlatButton
						label="Добавить"
						primary={true}
						onClick={action('add numberitem')}
						style={{ paddingLeft: 0 }}
					/>
				</MuiThemeProvider>
			</div>
		);
	})
