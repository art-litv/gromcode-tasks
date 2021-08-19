const listElem = document.querySelector(".list");
const createTaskBtnElem = document.querySelector(".create-task-btn");

const tasks = [
	{
		id: 1,
		text: "Buy milk",
		isDone: false,
		dateDone: null,
		date: new Date("2021-08-19"),
	},
	{
		id: 2,
		text: "Pick up Tom from airport",
		isDone: false,
		dateDone: null,
		date: new Date("2021-08-20"),
	},
	{
		id: 3,
		text: "Visit party",
		isDone: false,
		dateDone: null,
		date: new Date("2021-08-21"),
	},
	{
		id: 4,
		text: "Visit doctor",
		isDone: true,
		dateDone: new Date("2021-08-23"),
		date: new Date("2021-08-22"),
	},
	{
		id: 5,
		text: "Buy meat",
		isDone: true,
		dateDone: new Date("2021-08-24"),
		date: new Date("2021-08-23"),
	},
];

function createTask(id, text, isDone = false) {
	return { id, text, isDone };
}

function createElement(elementType, class_, attrs, dataset) {
	const element = document.createElement(elementType);

	if (class_) element.classList.add(class_);

	if (attrs)
		Object.keys(attrs).forEach((attr) => {
			element.setAttribute(attr, attrs[attr]);
		});

	if (dataset)
		Object.keys(dataset).forEach((dataKey) => {
			element.dataset[dataKey] = dataset[dataKey];
		});

	return element;
}

function renderDecorator(callbackFn) {
	return function () {
		const fnResult = callbackFn.apply(this, arguments);
		renderTasks(tasks);
		return fnResult;
	};
}

const onCheckboxClick = renderDecorator(({ target }) => {
	const taskId = +target.closest(".list__item").dataset.taskId;
	const task = tasks.find((task) => task.id === taskId);
	task.isDone = !task.isDone;
	task.dateDone = target.checked ? new Date() : null;
});

const onCreateBtnClick = renderDecorator(() => {
	const newTaskElement = document.querySelector(".task-input");
	if (!newTaskElement.value) return;

	const id = Math.max(...tasks.map((task) => task.id)) + 1;
	tasks.push(createTask(id, newTaskElement.value));
	newTaskElement.value = "";
});

createTaskBtnElem.addEventListener("click", onCreateBtnClick);

function compareTasks(a, b) {
	return !a.isDone && !b.isDone ? b.date - a.date : a.isDone - b.isDone;
}

const renderTasks = (tasksList) => {
	listElem.innerHTML = "";

	const tasksElems = tasksList
		.sort(compareTasks)
		.map(({ id, text, isDone }) => {
			const listItemElem = createElement("li", "list__item", null, {
				taskId: id,
			});

			const checkbox = createElement("input", "list__item-checkbox", {
				type: "checkbox",
			});
			checkbox.checked = isDone;
			checkbox.addEventListener("click", onCheckboxClick);

			if (isDone) listItemElem.classList.add("list__item_done");

			listItemElem.append(checkbox, text);
			return listItemElem;
		});

	listElem.append(...tasksElems);
};

renderTasks(tasks); // render test data by default
