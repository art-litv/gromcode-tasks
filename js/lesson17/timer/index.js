const timer = {
	secondsPassed: 0,
	minsPassed: 0,
	intervalId: undefined,

	startTimer() {
		this.intervalId = setInterval(
			function () {
				this.secondsPassed++;
				if (this.secondsPassed === 60) {
					this.minsPassed++;
					this.secondsPassed = 0;
				}
				console.log(this.getTime());
			}.bind(this),
			1000
		);
	},

	getTime() {
		return `${this.minsPassed}:${String(this.secondsPassed).padStart(2, "0")}`;
	},

	stopTimer() {
		clearInterval(this.intervalId);
	},

	resetTimer() {
		this.secondsPassed = 0;
		this.minsPassed = 0;
	},
};

timer.startTimer();
