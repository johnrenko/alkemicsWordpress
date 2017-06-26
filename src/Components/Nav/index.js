import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
	static propTypes = {
		onClick: PropTypes.func,
		content: PropTypes.string,
		primary: PropTypes.bool,
		secondary: PropTypes.bool
	};

	static defaultProps = {
		onClick: null,
		primary: false,
		secondary: false
	};

	constructor(props) {
		super(props);
	}

	render() {
		return <button className="btn">test</button>;
	}
}

export default Button;
