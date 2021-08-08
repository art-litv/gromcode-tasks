export function getItemsList(selector = ".technology") {
	const elementsList = document.querySelectorAll(selector);
	console.dir(elementsList);
	return elementsList;
}

export function getItemsArray(selector = ".tool") {
	const elementsArray = Array.from(document.querySelectorAll(selector));
	console.dir(elementsArray);
	return elementsArray;
}
