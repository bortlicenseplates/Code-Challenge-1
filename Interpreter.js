//regex match commands to keywords and return the list if exists;
const regexCommands = /\bplace\s\d*,\d*,(north|south|east|west)|move|left|report|exit\b/gi

const listCommands = input => input.toLowerCase().match(regexCommands);

const getCommands = (input) => {
	const commandList = listCommands(input);

	if (commandList == null)
		return new Error("The command specified is not recognised, please try again");

	return commandList;
}

module.exports = {
	getCommands
}
