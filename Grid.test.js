const Grid = require('./Grid');

test('checks if (4,5) is inside (5,5)', () => {
	const grid = new Grid(5,5);
	expect(grid.isInsideMap(4,5)).toBe(true);
})
test('checks if (5,5) is inside (5,5)', () => {
	const grid = new Grid(5,5);
	expect(grid.isInsideMap(5,5)).toBe(true);
})
test('checks if (8,3) is inside (5,5)', () => {
	const grid = new Grid(5,5);
	expect(grid.isInsideMap(8,3)).toBe(false);
})
test('checks if (3,-2) is inside (5,5)', () => {
	const grid = new Grid(5,5);
	expect(grid.isInsideMap(3,-2)).toBe(false);
})
test('checks if ("test","case") is inside (5,5)', () => {
	const grid = new Grid(5,5);
	expect(grid.isInsideMap("test","case")).toBe(false);
})
test('checks if () is inside (5,5)', () => {
	const grid = new Grid(5,5);
	expect(grid.isInsideMap()).toBe(false);
})
test('checks if (2,3,6,2) is inside (5,5)', () => {
	const grid = new Grid(5,5);
	expect(grid.isInsideMap(2,3,6,2)).toBe(true);
})
