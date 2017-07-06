import React, { Component } from "react";
import "./Homepage.css";

import HeroHeader from "../../Modules/HeroHeader";
import ValueBlock from "../../Modules/ValueBlock";
import HeaderAction from "../../Components/HeaderAction";
import NavBar from "../../Modules/NavBar";

class Homepage extends Component {
	render() {
		return (
			<div>
				<div className="NavHeader">
					<NavBar />
					<HeroHeader />
				</div>
				<ValueBlock />
			</div>
		);
	}
}

export default Homepage;
