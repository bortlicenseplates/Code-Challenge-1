
module.exports = class Vector{
	constructor(...args){
		typeof args[0] === "number" ? this.x = args[0] : 0;
		typeof args[1] === "number" ? this.y = args[1] : 0;
	}
	add(vector){
		return new Vector(this.x + vector.x, this.y + vector.y);
	}

	rotateAroundOrigin(dir){
		if (this.x == 0){
			const newX = this.y * dir;
			const newY = 0;
			return new Vector(newX, newY);
		} else {
			const newX = 0;
			const newY = this.x * -dir;
			return new Vector(newX, newY);
		}
	}
}
