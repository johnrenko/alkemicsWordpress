import React, { Component } from "react";
import "./App.css";

import HeroHeader from "./Modules/HeroHeader";
import ValueBlock from "./Modules/ValueBlock";

class App extends Component {
	render() {
		return (
			<div>
				<HeroHeader />
				<ValueBlock />
			</div>
		);
	}
}

export default App;
