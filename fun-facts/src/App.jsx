import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";

import "./styles/app.css";

export function App() {
	const [darkMode, setDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setDarkMode((prevDarkMode) => !prevDarkMode)
   }

	return (
		<div className="container">
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<main className={`content ${darkMode ? "dark" : ""}`}>
				<h1 className="title">Fun facts about React</h1>
				<ul className="topics">
					<li>Was first released in 2013</li>
					<li>Was originally created by Jordan Walke</li>
					<li>Has well over 100K stars on GitHub</li>
					<li>Is maintained by Facebook</li>
					<li>
						Powers thousands of enterprise apps, including mobile apps
					</li>
				</ul>
			</main>
		</div>
	);
}
