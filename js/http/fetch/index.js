const fetchUserData = (userName) => {
	const apiUrl = "https://api.github.com/users/";
	return fetch(apiUrl + userName).then((response) => response.json());
};

const renderUserData = (userData) => {
	const { avatar_url, login, location } = userData;
	document.querySelector(".user__avatar").src = avatar_url;
	document.querySelector(".user__name").textContent = login;
	document.querySelector(".user__location").textContent = location
		? `from ${location}`
		: "";
};

const onSearchUser = () => {
	const userNameInputElem = document.querySelector(".name-form__input");
	fetchUserData(userNameInputElem.value).then((userData) =>
		renderUserData(userData)
	);
};

document.querySelector(".btn").addEventListener("click", onSearchUser);
