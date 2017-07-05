import PropTypes from "prop-types";
import React, { Component } from "react";
import "./ImgBanner.css";
import classNames from "classnames";

class ImgBanner extends Component {
	static propTypes = {
		imgs: PropTypes.array
	};

	static defaultProps = {
		imgs: []
	};

	render() {
		const { imgs } = this.props;

		return null;
	}
}

export default ImgBanner;
