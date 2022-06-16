import React, { useState } from "react";
import { getAllMemes, getRandomMeme } from "../../services/memeApi";

import "./meme.css";

export default function MemeForm() {
	const [allMemeImages, setAllMemeImages] = useState(getAllMemes());
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const getMemeImage = (event: React.MouseEvent<HTMLButtonElement>) => {
		event?.preventDefault();
		setMeme((prevMeme) => {
			return { ...prevMeme, randomImage: getRandomMeme().url };
		});
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, type, value, checked } = event.target;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	};

	return (
		<main>
			<form>
				<fieldset className="input-group">
					<input
						type="text"
						name="topText"
						value={meme.topText}
						placeholder="Top text"
						onChange={handleChange}
					/>
					<input
						type="text"
						name="bottomText"
						value={meme.bottomText}
						placeholder="Bottom text"
						onChange={handleChange}
					/>
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
				<h2 className="meme-text postion-top">{meme.topText}</h2>
				<h2 className="meme-text postion-bottom" >{meme.bottomText}</h2>
			</div>
		</main>
	);
}
