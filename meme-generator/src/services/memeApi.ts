import dataApi from "../../fakeApi";

export function getAllMemes() {
	const memesArray = dataApi.data.memes;
	return memesArray;
}

export function getRandomMeme() {
	const memesArray = dataApi.data.memes;
	const randomItem = memesArray[Math.floor(Math.random() * memesArray.length)];

	return randomItem;
}
