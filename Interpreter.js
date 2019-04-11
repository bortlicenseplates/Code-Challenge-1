

const getCommands = input => {
	if (typeof input !== 'string'){
		return new Error(`expected string, got ${typeof input}`);
	}
	return input.split(/\s/gi);
};

const getPlaceCoordinates = input => {
	const coordinateArray = input.split(/,/gi);

	return {
		x: parseInt(coordinateArray[0]),
		y: parseInt(coordinateArray[1]),
		direction: coordinateArray[2]
	};
}
module.exports = {
	getCommands,
	getPlaceCoordinates
}
