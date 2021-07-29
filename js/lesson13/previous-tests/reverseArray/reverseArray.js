export default (array) => {
	return Array.isArray(array) ? [...array].reverse() : null;
};
