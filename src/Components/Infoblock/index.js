import PropTypes from "prop-types";
import React, { Component } from "react";

import "./Infoblock.css";

class Infoblock extends Component {
	static propTypes = {
		icon: PropTypes.string,
		title: PropTypes.string,
		content: PropTypes.string
	};

	static defaultProps = {
		icon: "http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/ico-how-it-works-1.svg",
		title: "",
		content: "",
	};

	getClasses() {
		return Object.assign({}, this.props.extraClassNames, {});
	}

	render() {
		const { icon, title, content } = this.props;

		return (
			<div className="infoblock">
				<i
					className="ico"
					style={{
						backgroundImage: 'url('+icon+')'
					}}
				/>
				<h2>{this.props.title}</h2>
				<p>
					{this.props.content}
				</p>
			</div>
		);
	}
}
export default Infoblock;
