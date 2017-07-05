import React, { Component } from "react";
import "./App.css";

import HeroHeader from "./Modules/heroHeader";
import Infoblocks from "./Modules/Infoblocks";

class App extends Component {
	render() {
		return (
			<div>
				<HeroHeader />
				<Infoblocks />
			</div>
		);
	}
}

export default App;
