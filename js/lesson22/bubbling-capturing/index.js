function logToEventsList(target, color) {
	const eventsList = document.querySelector(".events-list");
	eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${target}</span>`;
}

document.querySelector(".clear-btn").addEventListener("click", () => {
	document.querySelector(".events-list").innerHTML = "";
});

document
	.querySelector(".attach-handlers-btn")
	.addEventListener("click", attachHandlers);

document
	.querySelector(".remove-handlers-btn")
	.addEventListener("click", removeHandlers);

function logCapturingDiv() {
	logToEventsList("DIV", "grey");
}

function logCapturingP() {
	logToEventsList("P", "grey");
}

function logCapturingSpan() {
	logToEventsList("SPAN", "grey");
}

function logBubblingDiv() {
	logToEventsList("DIV", "green");
}

function logBubblingP() {
	logToEventsList("P", "green");
}

function logBubblingSpan() {
	logToEventsList("SPAN", "green");
}

function attachHandlers() {
	const rect_div = document.querySelector(".rect_div");
	const rect_p = document.querySelector(".rect_p");
	const rect_span = document.querySelector(".rect_span");

	rect_div.addEventListener("click", logCapturingDiv, true);
	rect_div.addEventListener("click", logBubblingDiv);

	rect_p.addEventListener("click", logCapturingP, true);
	rect_p.addEventListener("click", logBubblingP);

	rect_span.addEventListener("click", logCapturingSpan, true);
	rect_span.addEventListener("click", logBubblingSpan);
}

function removeHandlers() {
	const rect_div = document.querySelector(".rect_div");
	const rect_p = document.querySelector(".rect_p");
	const rect_span = document.querySelector(".rect_span");

	rect_div.removeEventListener("click", logCapturingDiv, true);
	rect_div.removeEventListener("click", logBubblingDiv);

	rect_p.removeEventListener("click", logCapturingP, true);
	rect_p.removeEventListener("click", logBubblingP);

	rect_span.removeEventListener("click", logCapturingSpan, true);
	rect_span.removeEventListener("click", logBubblingSpan);
}

attachHandlers(); // default
