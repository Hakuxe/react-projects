import dataApi from "../../fakeApi";

export async function getAllMemesAsync() {
	try {
		const response = await fetch("https://api.imgflip.com/get_memes");
		const covertedJson = await response.json();
		return covertedJson.data.memes;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export function getAllMemes() {
	const memesArray = dataApi.data.memes;
	return memesArray;
}
