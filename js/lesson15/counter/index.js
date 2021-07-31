export function makeCounter() {
	let counter = 0;
	return () => counter++;
}
