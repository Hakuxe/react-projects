import React from "react";
import { getRandomMeme } from "../../services/memeApi";

import "./meme.css";

export default function MemeForm() {


	console.log(getRandomMeme().url);
	

	return (
		<main>
			<form>
				<fieldset className="input-group">
					<input type="text" placeholder="Top text" />
					<input type="text" placeholder="Bottom text" />
				</fieldset>
				<button className="form-button">Get a new meme image 🖼️</button>
			</form>
		</main>
	);
}
