import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
	static propTypes = {
		links: PropTypes.array
	};

	static defaultProps = {
		links: [
			["For brands", ""],
			["Customers", ""],
			["Partners", ""],
			["Log in", ""]
		]
	};

	render() {
		const { links } = this.props;
		const nav = links.map(a => (
			<li key={a[0]}>
				<a href={a[1]}>
					{a[0]}
				</a>
			</li>
		));
		return (
			<ul className="nav">
				{nav}
			</ul>
		);
	}
}

export default Nav;
