import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './Popup.css';
import { connect } from 'react-redux';
import { saveFormAction } from '../../actions/formAction';
import { closePopupAction } from '../../actions/popupAction';

class Popup extends Component {
	static propTypes = {
		openPopup: PropTypes.func,
		closePopup: PropTypes.func,
	};

	handleSubmit = (event) => {
		event.preventDefault();
	};

	handleSave = () => {
		this.props.saveFormFunc();
		return this.props.closePopup();
	};

	closePopup = () => {
		this.props.closePopupFunc();
		return this.props.closePopup();
	};

	render() {
		return (
			<div>
				<Form />
				<RaisedButton label="Сохранить" primary={true} keyboardFocused={true} onClick={this.handleSave} />
				<FlatButton label="Отмена" primary={true} onClick={this.closePopup} style={{ color: '#000' }} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		numberItems: state.formReducer.numberItems,
		isModalOpen: state.popupReducer.isModalOpen,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveFormFunc: () => dispatch(saveFormAction()),
		closePopupFunc: () => dispatch(closePopupAction()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
