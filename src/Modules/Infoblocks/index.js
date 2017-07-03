import PropTypes from "prop-types";
import React, { Component } from "react";
import Infoblock from "../../Components/Infoblock";

class Infoblocks extends Component {
	static propTypes = {
		blocksToRender: PropTypes.object
	};

	static defaultProps = {
		blocksToRender: {
			data: [
				{
					title: "Ensure Compliance with Industry Regulation",
					content: "Alkemics’s native compliance checks offer peace of mind and ensure that the products on your website contain all required information and data.",
					icon: "hello",
					id: 1
				},
				{
					title: "Accelerate Go-to-Market",
					content: "Increase productivity and decrease your time to market with automated collection, correction and sharing of product data.",
					icon: "hello",
					id: 2
				},
				{
					title: "Build Stronger Relationships with Shoppers",
					content: "Power your ecommerce website and improve shopper experience with rich content built for the digital world.",
					icon: "hello",
					id: 3
				},
				{
					title: "Centralize Communication with Brands",
					content: "Drive operational excellence through integrated and intuitive collaboration with manufacturers.",
					icon: "hello",
					id: 4
				}
			]
		}
	};

	renderOneBlock() {
		const content = this.props.blocksToRender.data;
		const map = content.map(wording => (
			<li key={wording.id}>
				<Infoblock
					title={wording.title}
					content={wording.content}
					key={wording.id}
				/>
			</li>
		));
		console.log(map);
		return map;
	}

	render() {
		return <ul>{this.renderOneBlock()}</ul>;
	}
}

export default Infoblocks;
