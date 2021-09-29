const fetchUserData = (userId) => {
	return fetch(`https://api.github.com/users/${userId}`).then((response) =>
		response.json()
	);
};

const fetchRepos = (reposUrl) => {
	return fetch(reposUrl).then((response) => response.json());
};

const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");
const repoListElem = document.querySelector(".repo-list");
const spinnerElem = document.querySelector(".spinner");

const defaultAvatar = "https://avatars3.githubusercontent.com/u100011";

const setDefaultAvatar = () => {
	if (userAvatarElem.src !== defaultAvatar) {
		userAvatarElem.src = defaultAvatar;
	}
};

setDefaultAvatar();

userAvatarElem.addEventListener("error", setDefaultAvatar);

const renderUser = (userData) => {
	const { avatar_url, name, location } = userData;

	userAvatarElem.src = avatar_url;
	userNameElem.textContent = name;
	userLocationElem.textContent = location ? `from ${location}` : "";
};

const renderUserRepos = (reposData) => {
	repoListElem.innerHTML = "";
	const repoElemsArray = reposData.map(({ name }) => {
		const repoElem = document.createElement("li");
		repoElem.classList.add("repo-list__item");
		repoElem.textContent = name;
		return repoElem;
	});

	repoListElem.append(...repoElemsArray);
};

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
	const userId = userNameInputElem.value;

	spinnerElem.classList.remove("spinner_hidden");
	fetchUserData(userId)
		.then((userData) => {
			renderUser(userData);

			const { repos_url } = userData;
			return fetchRepos(repos_url);
		})
		.then((reposData) => renderUserRepos(reposData))
		.catch(() => alert("Failed to load data"))
		.finally(() => spinnerElem.classList.add("spinner_hidden"));
};

showUserBtnElem.addEventListener("click", onSearchUser);
