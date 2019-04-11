// const grid = require('./Grid');
const Vector = require('./Vector');
const helpers = require('./helpers')

module.exports = class Pacman{
	constructor(x, y, direction, grid){
		this.position = new Vector(x, y);
		this.direction = new helpers.directionToVector(direction);
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
			direction: helpers.vectorToDirection(this.direction)
		}
		console.log(`${info.x}, ${info.y}, ${info.direction}`);
	}
}
