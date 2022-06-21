import SwitchToggle from "../SwitchToggle/SwitchToggle";
import reactLogo from "../../assets/logo.svg";

import "./navbarStyles.css";

export default function Navbar({ darkMode, toggleDarkMode }) {
	return (
		<nav className={`navbar ${darkMode ? "dark" : ""}`}>
			<h2 className="logo">
				<img src={reactLogo} width={40} alt="" />
				ReactFacts
			</h2>
			<SwitchToggle
				darkMode={darkMode}
				handleClick={toggleDarkMode }
			/>
		</nav>
	);
}
