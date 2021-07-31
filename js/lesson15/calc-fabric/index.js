export const createCalculator = () => {
	let result = 0;

	function add(num) {
		result += num;
	}

	function decrease(num) {
		result -= num;
	}

	function reset() {
		result = 0;
	}

	function getMemo() {
		return result;
	}

	return {
		add,
		decrease,
		reset,
		getMemo,
	};
};
