import { createLogger } from "./index";

it("createLogger", () => {
	const logger = createLogger();

	function sleepFor(sleepDuration) {
		var now = new Date().getTime();
		while (new Date().getTime() < now + sleepDuration) {
			/* Do nothing */
		}
	}

	/* Sleep for logger.getRecords to sort array the right way */
	logger.log("User logged in");
	sleepFor(100);
	logger.warn("User try to restricted page");
	sleepFor(100);
	logger.log("User logged out");
	sleepFor(100);
	logger.error("Unexpected error on the site");

	let result;

	// miss dateTime, can't be compared as has evaluated Date.now() value
	result = logger
		.getRecords()
		.map((record) => ({ message: record.message, type: record.type }));

	expect(result).toEqual([
		{
			message: "Unexpected error on the site",
			type: "error",
		},
		{
			message: "User logged out",
			type: "log",
		},
		{
			message: "User try to restricted page",
			type: "warn",
		},
		{
			message: "User logged in",
			type: "log",
		},
	]);

	// miss dateTime, can't be compared as has evaluated Date.now() value
	result = logger
		.getRecords("log")
		.map((record) => ({ message: record.message, type: record.type }));

	expect(result).toEqual([
		{ message: "User logged out", type: "log" },
		{ message: "User logged in", type: "log" },
	]);

	// miss dateTime, can't be compared as has evaluated Date.now() value
	result = logger
		.getRecords("error")
		.map((record) => ({ message: record.message, type: record.type }));

	expect(result).toEqual([
		{
			message: "Unexpected error on the site",
			type: "error",
		},
	]);

	// miss dateTime, can't be compared as has evaluated Date.now() value
	result = logger
		.getRecords("warn")
		.map((record) => ({ message: record.message, type: record.type }));

	expect(result).toEqual([
		{
			message: "User try to restricted page",
			type: "warn",
		},
	]);
});
