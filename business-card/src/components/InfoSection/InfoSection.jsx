import React from "react";

import "./infoSectionStyles.css";

export default function InfoSection({ title, text }) {
	return (
		<section className="container">
			<h3 className="title">{title}</h3>
			<p className="text">{text}</p>
			
		</section>
	);
}
