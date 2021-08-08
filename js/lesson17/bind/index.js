const bind = function (func, context, ...args) {
	return function () {
		const fnArgs = [].slice.call(arguments);
		console.log(`${args} + ${fnArgs} = ${args.concat([...arguments])}`);
		return func.apply(context, args.concat(fnArgs));
	};
};

function printNameAndYear(year) {
	return `${this.name} - ${year}`;
}

const nameYear = bind(printNameAndYear, { name: "Tom" }, 18);
nameYear();
const nameAnotherYear = bind(nameYear, { name: "Jack" }, 46);
nameAnotherYear();
