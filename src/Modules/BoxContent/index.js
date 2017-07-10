import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "../../Components/Button";
import ImgBanner from "../../Components/ImgBanner";

import "./BoxContent.css";

class BoxContent extends Component {
	static propTypes = {
		title: PropTypes.string,
		content: PropTypes.string,
		mainCTA: PropTypes.string,
		secondCTA: PropTypes.string,
		imgs: PropTypes.array
	};

	static defaultProps = {
		title: "Alkemics for Brands",
		content: "Over 2700 Brands use Alkemics to collaborate and share product data with retailers",
		mainCTA: "Been Invited?",
		secondCTA: "Find Out More",
		imgs: [
			"http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-auchan.png",
			"http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-carrefour.png",
			"http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-casino.png",
			"http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-e_leclerc.png",
			"http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-super_u.png",
			"http://www.techalkemics.odns.fr/wp-content/uploads/2017/07/logo-walmart.png"
		]
	};

	render() {
		const { title, content, mainCTA, secondCTA, imgs } = this.props;
		return (
			<div className="boxContent">
				<div className="boxContent__top">
					<h1> {title} </h1>
					<p>{content}</p>
					<div className="boxContent__buttons">
						<Button content={mainCTA} primary />
						<Button content={secondCTA} secondary />
					</div>
				</div>
				<div className="boxContent__bottom">
					<ImgBanner imgs={this.props.imgs} />
				</div>
			</div>
		);
	}
}

export default BoxContent;
