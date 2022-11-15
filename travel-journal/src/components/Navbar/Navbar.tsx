import "./styles.css";

import worldIcon from "../../assets/world.svg"

export default function Navbar() {
	return (
		<nav className="navbar">
			<img id="logo" src={worldIcon} alt="logo Airbnb" />
			<p className="logo-text">my travel journal.</p>
		</nav>
	);
}
