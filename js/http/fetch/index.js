const fetchUserData = (userName) => {
	const apiUrl = "https://api.github.com/users/";
	return fetch(apiUrl + userName)
		.then((data) => data.json())
		.then((jsonData) => jsonData);
};

const renderUserData = (userName) => {
	fetchUserData(userName).then((data) => {
		document.querySelector(".user__avatar").src = data.avatar_url;
		document.querySelector(".user__name").textContent = data.login;
		document.querySelector(".user__location").textContent = data.location
			? "from" + data.location
			: "";
	});
};

document.querySelector(".btn").addEventListener("click", () => {
	const userNameInputElem = document.querySelector(".name-form__input");
	renderUserData(userNameInputElem.value);
});
