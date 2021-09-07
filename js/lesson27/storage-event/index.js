const plusBtnElem = document.querySelector('.counter__btn[data-type="plus"]');
const minusBtnElem = document.querySelector('.counter__btn[data-type="minus"]');
const counterNumElem = document.querySelector(".counter__number");

const getCurrentCounter = () =>
	JSON.parse(localStorage.getItem("counter")) || 0;

const renderCounter = () =>
	(counterNumElem.textContent = localStorage.getItem("counter"));

const renderCounterDecorator = (func) => {
	return function () {
		const funcResult = func.apply(this, arguments);
		renderCounter();
		return funcResult;
	};
};

const incrementCounter = () => {
	localStorage.setItem("counter", getCurrentCounter() + 1);
};

const decrementCounter = () => {
	localStorage.setItem("counter", getCurrentCounter() - 1);
};

plusBtnElem.addEventListener("click", renderCounterDecorator(incrementCounter));
minusBtnElem.addEventListener(
	"click",
	renderCounterDecorator(decrementCounter)
);

document.addEventListener("DOMContentLoaded", () => renderCounter());
window.addEventListener("storage", (storageEvent) => {
	renderCounter();
});