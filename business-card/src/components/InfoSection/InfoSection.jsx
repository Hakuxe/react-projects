import React from "react";

import "./infoSectionStyles.css";

export default function InfoSection({ title, text }) {
	return (
		<section className="container">
			<h3>{title}</h3>
			<p>{text}</p>
		</section>
	);
}
