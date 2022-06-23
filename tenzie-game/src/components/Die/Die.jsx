import React from "react";

import "./dieStyles.css";

export function Die(props) {
	return (
		<div
			className={`die-container ${props.isHeld ? "bg-green-100" : ""}`}
			onClick={() => props.handleHoldDice(props.id)}
		>
			<span className="number">{props.value}</span>
		</div>
	);
}
