export default (array) => {
	if (!Array.isArray(array) || array.length === 0) return null;

	const absArray = array.map((el) => Math.abs(el));
	return Math.min(...absArray) ** 2;
};
