// const grid = require('./Grid');
const Vector = require('./Vector');


module.exports = class Pacman{
	constructor(x, y, direction, grid){
		this.position = new Vector(x, y);
		this.direction = new directionToVector(direction);
		this.grid = grid;
	}
	turnLeft(){
		this.direction = this.direction.rotateAroundOrigin(-1);
	}
	turnRight(){
		this.direction = this.direction.rotateAroundOrigin(1);
	}
	move(){
		const newPos = this.position.add(this.direction);
		if(this.grid.isInsideMap(newPos.x, newPos.y)){
			this.position = newPos;
		} else {
			console.error(`(${newPos.x}, ${newPos.y}) is not inside the grid (${this.grid.size.x}, ${this.grid.size.y}). Please try moving in a different direction or using the place command`);
		}
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

// Finish first. holds pacman state but not behaviour.
