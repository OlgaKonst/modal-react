import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import './PopupHeader.css';
import { grey900, grey100 } from 'material-ui/styles/colors';

export default class PopupHeader extends Component {
	static propTypes = {
		closePopup: PropTypes.func,
	};

	closePopup = () => {
		console.log('click');
		return this.props.closePopup();
	};

	render() {
		return (
			<div className="popup-header">
				<AppBar
					title="Структура номеров"
					titleStyle={{ color: grey900 }}
					style={{
						background: grey100,
						margin: '25px',
						width: 'auto'
					}}
					showMenuIconButton={false}
				>
					<div className="criss-cross" onClick={this.closePopup}>
						<svg
							fill="#000"
							height="34"
							viewBox="0 0 24 24"
							preserveAspectRatio="xMidYMid meet"
							width="34"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
							<path d="M0 0h24v24H0z" fill="none" />
						</svg>
					</div>
				</AppBar>
			</div>
		);
	}
}
