import React, { useState } from "react";
import { getAllMemes, getRandomMeme } from "../../services/memeApi";

import "./meme.css";

export default function MemeForm() {

	const [allMemeImages, setAllMemeImages] = useState(getAllMemes())
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const getMemeImage = (event: React.MouseEvent<HTMLButtonElement>) => {
		event?.preventDefault();
		setMeme(prevMeme => {
			return {...prevMeme, randomImage: getRandomMeme().url }
		})
	};


	return (
		<main>
			<form>
				<fieldset className="input-group">
					<input type="text" placeholder="Top text" />
					<input type="text" placeholder="Bottom text" />
				</fieldset>
				<button
					className="form-button"
					onClick={(event) => getMemeImage(event)}
				>
					Get a new meme image 🖼️
				</button>
			</form>
			<div className="meme-container">
				<img src={meme.randomImage} alt="" />
			</div>
		</main>
	);
}
