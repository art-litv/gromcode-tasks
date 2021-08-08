const callbackPrompt = {
	message: "Please, enter your phone number",

	showPrompt() {
		const tel = prompt(`${this.message}`);
		console.log(tel);
	},

	showDeferredPrompt(ms) {
		setTimeout(
			function () {
				console.log(this);
			}.bind(this),
			ms
		);
	},
};
