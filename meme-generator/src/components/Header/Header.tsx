import React from "react";

import "./header.css";

import trollFace from "../../assets/troll-face.png"

export default function Header() {
	return (
		<header className="container">
			<div className="logo-container">
				<img src={trollFace} alt="" />
				Gerador de memes
			</div>
         <p>React - Project 3</p>
		</header>
	);
}
