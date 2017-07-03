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
		console.log(process.env.PUBLIC_URL)
		return (
			<div className="infoblock">
				<i
					className="ico"
					style={{
						backgroundImage: 'url('+process.env.PUBLIC_URL+'/'+icon+'.svg)'
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
