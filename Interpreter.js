

const getCommands = input => {
	if (typeof input !== 'string'){
		return new Error(`expected string, got ${typeof input}`);
	}
	const commands = input.split(/\s/gi);
	return commands.map(command => command.toLowerCase());
};

const getPlaceCoordinates = input => {
	const coordinateArray = input.split(/,/gi);

	return {
		x: parseInt(coordinateArray[0]),
		y: parseInt(coordinateArray[1]),
		direction: coordinateArray[2].toLowerCase()
	};
}
module.exports = {
	getCommands,
	getPlaceCoordinates
}
