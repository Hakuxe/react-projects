import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import logo from "./logo.svg";

const List  = () => (
  
    <ul>
      <li>get a job</li>
      <li>get a job</li>
      <li>get a job</li>
    </ul>
  
)
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<List/>
	</React.StrictMode>
);
