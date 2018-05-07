import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberItem from '../NumberItem/NumberItem';
import FlatButton from 'material-ui/FlatButton';
import './Form.css';
import { connect } from 'react-redux';
import {
	addItemAction,
	removeItemAction,
	changeValueSelectAction,
	changeValueInputAction,
	saveFormAction,
} from '../../actions/formAction';

class Form extends Component {
	static propTypes = {
		numberItems: PropTypes.array,
	};
	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div>
				{this.props.numberItems.map((item) => (
					<NumberItem
						item={item}
						key={item.id}
						removeItem={this.props.removeItemFunc}
						changeValueSelect={this.props.changeValueSelectFunc}
						changeValueInput={this.props.changeValueInputFunc}
					/>
				))}
				<div className="add-btn">
					<FlatButton
						label="Добавить"
						primary={true}
						onClick={this.props.addItemFunc}
						labelStyle={{ paddingLeft: '0px' }}
					/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		numberItems: state.formReducer.numberItems,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		removeItemFunc: (id) => dispatch(removeItemAction(id)),
		addItemFunc: () => dispatch(addItemAction()),
		changeValueSelectFunc: (id, value) => dispatch(changeValueSelectAction(id, value)),
		changeValueInputFunc: (id, value) => dispatch(changeValueInputAction(id, value)),
		saveFormFunc: () => dispatch(saveFormAction()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
