const buttonElement = document.querySelector(".single-use-btn");

const logClicked = () => {
	console.log("clicked");
	buttonElement.removeEventListener("click", logClicked);
};

buttonElement.addEventListener("click", logClicked);
