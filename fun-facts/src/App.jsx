import React from "react";

import './styles/app.css';

import Navbar from "./components/Navbar/Navbar";

export function App() {
	return (
		<div className="container">
			<Navbar />
         <main className="content">
            <h1 className="title">Fun facts about React</h1>
            <ul className="topics">
               <li>Was first released in 2013</li>
               <li>Was originally created by Jordan Walke</li>
               <li>Has well over 100K stars on GitHub</li>
               <li>Is maintained by Facebook</li>
               <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

         </main>
		</div>
	);
}
