import { addImage } from "./addImage";

export const addImageV2 = (url) =>
	new Promise((resolve, reject) => {
		addImage(url, (error, data) => {
			if (error) reject(error);
			else resolve(data);
		});
	});

// examples

addImageV2("https://server.com/image.png")
	.then((data) => console.log(data)) // ==> { width: 200, height: 100 }
	.catch((error) => console.log(error)); // ==> 'Image load failed'
