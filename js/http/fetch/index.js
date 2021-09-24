const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");

const defaultAvatarUrl =
	"https://image-control-storage.s3.amazonaws.com/github-512.png";

userAvatarElem.src = defaultAvatarUrl;

const fetchUserData = (userName) => {
	const apiUrl = "https://api.github.com/users/";
	return fetch(apiUrl + userName).then((response) =>
		response.ok ? response.json() : { avatar_url: defaultAvatarUrl }
	);
};

const renderUserData = (userData) => {
	const { avatar_url, login, location } = userData;
	console.log(userData);
	userAvatarElem.src = avatar_url + ".png";
	userNameElem.textContent = login || "";
	userLocationElem.textContent = location ? `from ${location}` : "";
};

const onSearchUser = () => {
	const userNameInputElem = document.querySelector(".name-form__input");
	fetchUserData(userNameInputElem.value).then((userData) =>
		renderUserData(userData)
	);
};

document
	.querySelector(".name-form__btn")
	.addEventListener("click", onSearchUser);
