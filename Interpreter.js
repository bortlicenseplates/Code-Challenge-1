//regex match commands to keywords and return the list if exists;
const regexCommands = /place\s\d*,\d*,(north|south|east|west)|move|left|right|report|exit/gi

const getCommands = input => input.toLowerCase().match(regexCommands);

const getCommandsBetter = input => input.split((/\s/gi));

const getPlaceCoordinates = input => {
	const coordinateArray = input.split((/,/gi));

	return {
		x: parseInt(coordinateArray[0]),
		y: parseInt(coordinateArray[1]),
		direction: coordinateArray[2]
	};
}
module.exports = {
	getCommands,
	getCommandsBetter,
	getPlaceCoordinates
}
