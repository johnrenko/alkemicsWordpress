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
		icon: "how-it-works-1",
		title: "",
		content: ""
	};

	getClasses() {
		return Object.assign({}, this.props.extraClassNames, {});
	}

	render() {
		const { icon, title, content } = this.props;

		return (
			<div>
				<i
					className="ico"
					style={{
						backgroundImage: "url(./img/ico-" + icon + ".svg)"
					}}
				/>
				<h2>{title}</h2>
				<p>
					{content}
				</p>
			</div>
		);
	}
}

export default Infoblock;
