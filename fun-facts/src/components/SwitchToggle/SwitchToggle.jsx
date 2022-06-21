import React from "react";
import "./switchToggle.css"

export default function SwitchToggle({ darkMode ,handleClick}) {
	return (
		<div className={`toggler ${darkMode? "dark": ""}`}>
			<p className="toggler-light">Light</p>
			<div className="toggler-slider" onClick={handleClick}>
				<div className="toggler-slider-circle"></div>
			</div>
			<p className="toggler-dark">Dark</p>
		</div>
	);
}
