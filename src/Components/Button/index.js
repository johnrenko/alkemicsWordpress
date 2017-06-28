import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Button.css";
import classNames from "classnames";

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
		secondary: true
	};

	getClasses() {
		return Object.assign({}, this.props.extraClassNames, {
			btn: true,
			"btn-primary": this.props.primary,
			"btn-secondary": this.props.secondary,
			disabled: this.props.disabled
		});
	}

	render() {
		const {
			primary,
			secondary,
		} = this.props;
		const classes = this.getClasses();

		return <button className={classNames(classes)}>test</button>;
	}
}

export default Button;
