import PropTypes from "prop-types";
import React, { Component } from "react";
import "./HeaderAction.css";

class HeaderAction extends Component {
	static propTypes = {
		button_1: PropTypes.string,
		button_2: PropTypes.string
	};

	static defaultProps = {
		button_1: "fr",
		button_2: "Talk to Us"
	};

	render() {
		const { button_1, button_2 } = this.props;
		return (
			<div className="headerAction">
				<a className="language" href="">{button_1}</a>
				<a className="" href="">{button_2}</a>
			</div>
		);
	}
}

export default HeaderAction;
