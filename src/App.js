import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Popup from './components/Popup/Popup';
import Dialog from 'material-ui/Dialog';
import PopupHeader from './components/PopupHeader/PopupHeader';
import { openPopupAction, closePopupAction } from './actions/popupAction';

class App extends Component {
	handleOpen = () => {
		return this.props.openPopupFunc();
	};

	handleClose = () => {
		return this.props.closePopupFunc();
	};

	render() {
		return (
			<div className="app">
				<RaisedButton label="Open Popup" secondary={true} onClick={this.handleOpen} className="popup-btn" />

				<div className='modal'>
					<Dialog
						title={<PopupHeader closePopup={this.props.closePopupFunc} />}
						modal={false}
						style={{ paddingTop: '15px', border: '1px solid transparent'}}
						contentStyle={{maxWidth: '500px', width: '60%'}}
						open={this.props.isModalOpen}
						onRequestClose={this.handleClose}
						children={<Popup openPopup={this.props.openPopupFunc} closePopup={this.props.closePopupFunc} />}
					/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isModalOpen: state.popupReducer.isModalOpen,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		openPopupFunc: () => dispatch(openPopupAction()),
		closePopupFunc: () => dispatch(closePopupAction()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
