const Vector = require('./Vector');
test('add -> (2,1) (3,3)', () => {
	const vector1 = new Vector(2,1);
	const vector2 = new Vector(3,3);
	expect(vector1.add(vector2)).toEqual(new Vector(5,4));
})
test('add -> (2,1) (3,3)', () => {
	const vector1 = new Vector(2,1);
	const vector2 = new Vector(3,3);
	expect(vector1.add(vector2)).not.toEqual(new Vector(8,2));
})

test('rotateAroundOrigin -> -1', () => {
	const vector1 = new Vector(0,1);
	expect(vector1.rotateAroundOrigin(-1)).toEqual(new Vector(-1,0));
})
test('rotateAroundOrigin -> 1', () => {
	const vector1 = new Vector(0,1);
	expect(vector1.rotateAroundOrigin(1)).toEqual(new Vector(1,0));
})
