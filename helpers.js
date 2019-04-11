const Vector = require('./Vector');
const vectorDirection = {
	north: [0,1],
	east: [1,0],
	south: [0,-1],
	west: [-1,0]
};
function directionToVector(direction){
	try {
		const vectorProps = vectorDirection[direction];
		return new Vector(vectorProps[0], vectorProps[1]);
	} catch(e) {
		console.log(`${direction} is not a valid direction. Please try placing Pacman again.`);
	}

}
function vectorToDirection(vector){
	const vecArr = new Array(vector.x, vector.y);
	const keys = Object.keys(vectorDirection);
	return keys.find(key => arrayIsEqual(vectorDirection[key], vecArr)).toUpperCase();
}
function arrayIsEqual (arr1, arr2){
	if (arr1.length !== arr2.length) return false;
	for(index = 0; index < arr2.length; index++){
      if (arr1[index] !== arr2[index]) return false;
    }
  	return true;
}
module.exports = {
	directionToVector,
	vectorToDirection,
	arrayIsEqual
}
