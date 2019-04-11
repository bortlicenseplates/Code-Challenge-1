//regex match commands to keywords and return the list if exists;
const regexCommands = /place\s\d*,\d*,(north|south|east|west)|move|left|report|exit/gi

const listCommands = input => input.toLowerCase().match(regexCommands);

const getCommands = (input) => {
	const commandList = listCommands(input);

	return commandList;
}

module.exports = {
	getCommands
}
