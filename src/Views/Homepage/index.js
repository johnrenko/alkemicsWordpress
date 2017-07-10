import React, { Component } from "react";
import "./Homepage.css";

import HeaderAction from "../../Components/HeaderAction";
import HeroHeader from "../../Modules/HeroHeader";
import ValueBlock from "../../Modules/ValueBlock";
import NavBar from "../../Modules/NavBar";
import BoxContent from "../../Modules/BoxContent";

class Homepage extends Component {
	render() {
		return (
			<div>
				<div className="NavHeader">
					<NavBar />
					<HeroHeader />
				</div>
				<ValueBlock />
				<BoxContent />
			</div>
		);
	}
}

export default Homepage;
