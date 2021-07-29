export default (clients, balances, client, amount) => {
	const clientIndex = clients.indexOf(client);
	return balances[clientIndex] >= amount
		? (balances[clientIndex] -= amount)
		: -1;
};
