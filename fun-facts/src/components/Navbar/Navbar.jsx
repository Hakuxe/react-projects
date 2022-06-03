import reactLogo from "../../assets/logo.svg";

import "./navbarStyles.css";

export default function Navbar() {
	return (
		<nav className="navbar">
			<h2 className="logo">
				<img src={reactLogo} width={40} alt="" />
				ReactFacts
			</h2>
			<h3 className="info">React course - project 1</h3>
		</nav>
	);
}
