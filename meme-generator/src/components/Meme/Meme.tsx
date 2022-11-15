import React, { useEffect, useState } from "react";
import { getAllMemes, getAllMemesAsync } from "../../services/memeApi";

import "./meme.css";

export default function MemeForm() {
	const [allMemes, setAllMemes] = useState(getAllMemes());
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	useEffect(() => {
		const getMemes = async () => {
			setAllMemes(await getAllMemesAsync());
		};

		getMemes();

		/*
			fetch("https://api.imgflip.com/get_memes")
				.then(res => res.json())
				.then(response => setAllMemes(response.data.memes))
				.catch(error => console.error(error))
		 */
	}, []);

	const getMemeImage = (event: React.MouseEvent<HTMLButtonElement>) => {
		event?.preventDefault();

		const randomPick = allMemes[Math.floor(Math.random() * allMemes.length)];

		setMeme((prevMeme) => {
			return {
				...prevMeme,
				randomImage: randomPick.url,
			};
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
				<h2 className="meme-text postion-bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
