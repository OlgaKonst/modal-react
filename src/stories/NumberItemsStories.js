import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NumberItem from '../components/NumberItem/NumberItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../components/NumberItem/NumberItem.css';
const items = [
	{ id: 1, selectValue: 'Twin', inputValue: 22 },
	{ id: 2, selectValue: 'Tripple', inputValue: 12 },
	{ id: 3, selectValue: 'Quadro', inputValue: 4 },
];
const muiThemebtn = getMuiTheme();
const stories = storiesOf('App/Popup/Form/NumberItems', module);

stories.add('list of numberitems', () => (
	<div>
		{items.map((item) => (
			<MuiThemeProvider muiTheme={muiThemebtn}>
				<NumberItem
					item={item}
					key={item.id}
				/>
			</MuiThemeProvider>
		))}
	</div>
));
stories.add('close item', () => (
	<div>
		{items.map((item) => (
			<MuiThemeProvider muiTheme={muiThemebtn}>
				<NumberItem
					item={item}
					key={item.id}
					removeItem={action('close item')}
				/>
			</MuiThemeProvider>
		))}
	</div>
));

stories.add('change select value in item', () => (
	<div>
		{items.map((item) => (
			<MuiThemeProvider muiTheme={muiThemebtn}>
				<NumberItem
					item={item}
					key={item.id}
					removeItem={action('close item')}
					changeValueSelect={action('change select value')}
					//changeValueInput={this.props.changeValueInputFunc}
				/>
			</MuiThemeProvider>
		))}
	</div>
));
stories.add('change input value', () => (
	<div>
		{items.map((item) => (
			<MuiThemeProvider muiTheme={muiThemebtn}>
				<NumberItem
					item={item}
					key={item.id}
					removeItem={action('close item')}
					changeValueSelect={action('change select value')}
					changeValueInput={action('change input value')}
				/>
			</MuiThemeProvider>
		))}
	</div>
));





