export function getTitle(selector = ".title") {
	const titleElement = document.querySelector(selector);
	return titleElement.textContent;
}

export function getDescription(selector = ".about") {
	const titleElement = document.querySelector(selector);
	return titleElement.innerText;
}

export function getPlans(selector = ".plans") {
	const titleElement = document.querySelector(selector);
	return titleElement.innerHTML;
}

export function getGoal(selector = ".goal") {
	const titleElement = document.querySelector(selector);
	return titleElement.outerHTML;
}
