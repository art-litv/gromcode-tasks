const buttonElement = document.querySelector(".single-use-btn");

const logClicked = (event) => {
	console.log(event.target);
	buttonElement.removeEventListener("click", logClicked);
};

buttonElement.addEventListener("click", logClicked);
