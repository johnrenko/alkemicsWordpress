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
					icon: "http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/ico-how-it-works-1.svg",
					id: 1
				},
				{
					title: "Accelerate Go-to-Market",
					content: "Increase productivity and decrease your time to market with automated collection, correction and sharing of product data.",
					icon: "http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/ico-how-it-works-2.svg",
					id: 2
				},
				{
					title: "Build Stronger Relationships with Shoppers",
					content: "Power your ecommerce website and improve shopper experience with rich content built for the digital world.",
					icon: "http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/ico-how-it-works-3.svg",
					id: 3
				},
				{
					title: "Centralize Communication with Brands",
					content: "Drive operational excellence through integrated and intuitive collaboration with manufacturers.",
					icon: "http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/ico-how-it-works-5.svg",
					id: 4
				}
			]
		}
	};

	renderBlocks() {
		const content = this.props.blocksToRender.data;
		const list = content.map(wording => (
			<li key={wording.id}>
				<Infoblock
					title={wording.title}
					content={wording.content}
					icon={wording.icon}
					key={wording.id}
				/>
			</li>
		));

		return list;
	}

	render() {
		return <ul>{this.renderBlocks()}</ul>;
	}
}

export default Infoblocks;
