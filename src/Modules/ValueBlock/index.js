import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "../../Components/Button"
import Infoblocks from "../Infoblocks";

import "./valueBlock.css"

class ValueBlock extends Component {
	render() {
		return (
			<div className="valueBlock">
				<h1>A Digital Collaboration Platform for Retail</h1>
				<Infoblocks />
				<Button content="Customers" primary/>
			</div>
		);
	}
}

export default ValueBlock;
