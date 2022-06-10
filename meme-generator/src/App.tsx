import React, { useState } from "react";

import "./styles/app.css";

import Header from "./components/Header/Header";
import Meme from "./components/Meme/Meme";

function App() {
	return (
		<div className="App">
			<Header />
      <Meme/>
		</div>
	);
}

export default App;
