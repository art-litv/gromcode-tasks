function finishList() {
	const listElement = document.querySelector(".list");
	const listChildrenArray = Array.from(listElement.children);

	let prevChildElValue = 0;
	listChildrenArray.forEach((childEl) => {
		const childElValue = +childEl.textContent;
		for (let i = prevChildElValue; childElValue - i !== 1; i++) {
			const newChildEl = document.createElement("li");
			newChildEl.textContent = i + 1;
			childEl.before(newChildEl);
		}
		prevChildElValue = childElValue;
	});
}

finishList();
