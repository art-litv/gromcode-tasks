export function getTitleElement(selector = ".title") {
	const titleElement = document.querySelector(selector);
	console.log(titleElement);
	return titleElement;
}

export function getInputElement(selector = 'input[type="text"]') {
	const inputElement = document.querySelector(selector);
	console.log(inputElement);
	return inputElement;
}
