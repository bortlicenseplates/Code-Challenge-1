module.exports = class Grid{
	constructor(x,y){
		this.size = {x: x,y: y};
	}

	isInsideMap(x,y){
		const isXInside = isInRange(x, 0, this.size.x);
		const isYInside = isInRange(y, 0, this.size.y);
		if(isXInside && isYInside) return true;
		return false;
	}
}

//hidden from imports
const isInRange = (input, min, max) => {
	if (input > min || input < max)
		return true;
	return false;
}
