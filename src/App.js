import React, { Component } from "react";
import "./App.css";

import Infoblocks from "./Modules/Infoblocks";
import Button from "./Components/Button";

class App extends Component {
	render() {
		return (
			<div>
				<Infoblocks />
				<Button primary content="Customers" />
			</div>
		);
	}
}

export default App;
