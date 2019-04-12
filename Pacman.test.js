const Pacman = require('./Pacman');
const Grid = require('./Grid');
test('create new pacman', () => {
	const grid = new Grid(5,5)
	const pacman = new Pacman(2,2,'north',grid);
	expect(pacman).toEqual({
		position: {
			x: 2, y:2
		},
		direction: {
			x:0, y:1
		},
		grid:grid
	});
});

test('left', () => {
	const grid = new Grid(5,5)
	const pacman = new Pacman(2,2,'north',grid);
	pacman.turnLeft()
	expect(pacman).toEqual(new Pacman(2,2,'west',grid));
});
test('right', () => {
	const grid = new Grid(5,5)
	const pacman = new Pacman(2,2,'north',grid);
	pacman.turnRight()
	expect(pacman).toEqual(new Pacman(2,2,'east',grid));
});
test('move', () => {
	const grid = new Grid(5,5)
	const pacman = new Pacman(2,2,'north',grid);
	pacman.move();
	expect(pacman).toEqual(new Pacman(2,3,'north',grid));
});
test('report', () => {
	const grid = new Grid(5,5)
	const pacman = new Pacman(2,2,'north',grid);
	expect(pacman.report()).toEqual("2,2,NORTH");
});
