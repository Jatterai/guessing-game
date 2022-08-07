class GuessingGame {
	constructor() {

	}

	setRange(min, max) {
		this.low = min;
		this.high = max;
	}

	guess() {
		this.last = Math.ceil((this.low + this.high) / 2);
		console.log(this.last);
		return this.last
	}

	lower() {
		this.high = this.last;
		console.log('Lower:')
		this.guess();
	}

	greater() {
		this.low = this.last;
		console.log(`Greater:`)
		this.guess();
	}
}

module.exports = GuessingGame;
