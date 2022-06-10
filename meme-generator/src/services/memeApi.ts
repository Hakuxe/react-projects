import dataApi from "../../fakeApi";

export function getRandomMeme() {
	const memesArray = dataApi.data.memes;
	const randomItem = memesArray[Math.floor(Math.random() * memesArray.length)];

	return randomItem;
}
