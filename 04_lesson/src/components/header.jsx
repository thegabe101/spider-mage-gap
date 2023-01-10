import React from "react";
import axios from "axios";
import API from "../API";
import { Component } from "react";
import { useState, useEffect } from "react";
import spiderGapPic from "../assets/Glacier+Peak+Loop_-5.jpg";
import "../styles/spider.css";

const URL_PREFIX = "http://api:8080/";

class Spider extends React.Component {
	constructor(props) {
		super(props);
		this.state = { title: "" };
	}

	setTitle() {
		axios
			.get(`/api2` + URL_PREFIX)
			.then((response) => {
				this.setState({
					title: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		console.log(this.state.title);

		if (this.state.title === "") {
			this.setTitle();
		}

		return (
			<div>
				<h1>{this.state.title}</h1>
				<img className="spiderGapHeader" src={spiderGapPic}></img>
			</div>
		);
	}
}

export default Spider;
