import PropTypes from "prop-types";
import React, { Component } from "react";
import "./NavBar.css";

import Nav from "../../Components/Nav";
import HeaderAction from "../../Components/HeaderAction";
import logo from "./img/logo.svg";

class NavBar extends Component {
	render() {
		return (
			<div className="NavBar">
				<img src={logo} />
				<Nav />
				<HeaderAction />
			</div>
		);
	}
}

export default NavBar;
