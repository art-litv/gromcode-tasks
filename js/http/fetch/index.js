const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");

const fetchUserData = (userName) => {
	const apiUrl = "https://api.github.com/users/";
	return fetch(apiUrl + userName).then((response) => response.json());
};

const renderUserData = (userData) => {
	const { avatar_url, login, location } = userData;
	userAvatarElem.src = avatar_url;
	userNameElem.textContent = login;
	userLocationElem.textContent = location ? `from ${location}` : "";
};

const onSearchUser = () => {
	const userNameInputElem = document.querySelector(".name-form__input");
	fetchUserData(userNameInputElem.value).then((userData) =>
		renderUserData(userData)
	);
};

document.querySelector(".btn").addEventListener("click", onSearchUser);
