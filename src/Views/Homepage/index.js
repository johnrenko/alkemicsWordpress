import React, { Component } from "react";
import axios from 'axios';
import "./Homepage.css";

import Infoblocks from "../../Modules/Infoblocks";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = { content: [] };
	}

	componentDidMount() {
		this.getContent();
	}

	getContent() {
		const endpoint = 'http://www.techalkemics.odns.fr/wp-json/wp/v2/pages?search=homepage'
        return new Promise((resolve, reject) => {
            axios.get(endpoint).then((response) => {
                this.setState({ content: response.data[0].acf.logo_1 })
            }).catch((error) => {
                reject(error);
            }); 
        });     
    }

	render() {
		console.log(this.state.content)
		return <img src={this.state.content} />;
	}
}

export default Homepage;
