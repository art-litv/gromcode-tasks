const baseUrl = "https://6151a12d4a5f22001701d31f.mockapi.io/users";

const createUser = (userData) => {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	};

	return fetch(baseUrl, options)
		.then((response) =>
			response.ok ? response.json() : Promise.reject("Failed to create user")
		)
		.catch(() => Promise.reject("Failed to create user"));
};

const loginFormElem = document.querySelector(".login-form");
const loginFormSubmitBtnElem = document.querySelector(".submit-button");
const errorTextElem = document.querySelector(".error-text");

loginFormElem.addEventListener("input", () => {
	loginFormSubmitBtnElem.disabled = !loginFormElem.reportValidity();
	errorTextElem.textContent = "";
});

const clearLoginFormFields = () => {
	loginFormElem
		.querySelectorAll("input")
		.forEach((inputElem) => (inputElem.value = ""));
};

const onLoginFormSubmit = (event) => {
	event.preventDefault();
	const loginFormData = new FormData(event.target);
	createUser(Object.fromEntries(loginFormData))
		.then((response) => {
			alert(JSON.stringify(response));
			clearLoginFormFields();
		})
		.catch((error) => {
			errorTextElem.textContent = error;
		});
};

loginFormElem.addEventListener("submit", onLoginFormSubmit);
