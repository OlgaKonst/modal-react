import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import './NumberItem.css';

export default class NumberItems extends Component {
	static propTypes = {
		removeItem: PropTypes.func,
		changeValueSelect: PropTypes.func,
		changeValueInput: PropTypes.func,
	};
	removeItem = () => {
		return this.props.removeItem(this.props.item.id);
	};

	changeValueSelect = (...rest) => {
		return this.props.changeValueSelect(this.props.item.id, rest[2]);
	};

	changeValueInput = (e) => {
		return this.props.changeValueInput(this.props.item.id, e.target.value);
	};

	render() {
		return (
			<div className="number-item">
				<SelectField
					value={this.props.item.selectValue}
					onChange={this.changeValueSelect}
					style={{ width: '140px', fontSize: '20px', textAlign: 'left' }}
				>
					<MenuItem value="Twin" primaryText="Twin" />
					<MenuItem value="Tripple" primaryText="Tripple" />
					<MenuItem value="Quadro" primaryText="Quadro" />
				</SelectField>
				<TextField
					id={'text-field-controlled' + this.props.item.id}
					style={{ width: '40px', fontSize: '20px', marginRight: '20px' }}
					defaultValue={this.props.item.inputValue}
					type="number"
					onChange={this.changeValueInput}
				/>
				<div className="closebtn" onClick={this.removeItem}>
					<svg
						className="crisscross"
						fill="#C62828"
						height="34"
						viewBox="0 0 24 24"
						width="34"
						xmlns="http://www.w3.org/2000/svg"
						style ={{
							padding: '3px'
						 }}
					>
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</div>
			</div>
		);
	}
}
