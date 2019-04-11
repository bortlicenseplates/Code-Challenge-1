const vectorDirection = {
	north: [0,1],
	east: [1,0],
	south: [0,-1],
	west: [-1,0]
};
const grid = require('./Grid');
const Vector = require('./Vector');
module.exports = class Pacman{
	constructor(x, y, direction){
		this.position = new Vector(x, y);
		this.direction = new directionToVector(direction);

	}
	turnLeft(){
		this.direction = this.direction.turn(-1);
	}
	turnRight(){
		this.direction = this.direction.turn(1);
	}
	move(){
		this.position = this.position.add(this.direction);
	}
	report(){
		const info = {
			x: this.position.x,
			y: this.position.y,
			direction: vectorToDirection(this.direction)
		}
		console.log(`${info.x}, ${info.y}, ${info.direction}`);
	}
}

function directionToVector(direction){
	const vectorProps = vectorDirection[direction];
	return new Vector(vectorProps[0], vectorProps[1]);
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

// Finish first. holds pacman state but not behaviour.
