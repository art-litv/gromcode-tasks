export function createLogger() {
	const messages = [];

	function createMessage(messageText, messageType) {
		return {
			message: messageText,
			dateTime: new Date(),
			type: messageType,
		};
	}

	function warn(messageText) {
		const message = createMessage(messageText, "warn");
		messages.push(message);
	}

	function error(messageText) {
		const message = createMessage(messageText, "error");
		messages.push(message);
	}

	function log(messageText) {
		const message = createMessage(messageText, "log");
		messages.push(message);
	}

	function getRecords(type) {
		const records = type
			? messages.filter((message) => message.type === type)
			: [...messages];

		return records.sort((msg1, msg2) => msg2.dateTime - msg1.dateTime);
	}

	return {
		warn,
		error,
		log,
		getRecords,
	};
}
