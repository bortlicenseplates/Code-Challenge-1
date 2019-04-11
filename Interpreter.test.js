const interpreter = require('./Interpreter');
test('getCommands -> the quick brown fox', () => {
	expect(interpreter.getCommands("the quick brown fox")).toEqual([
		"the","quick","brown","fox"
	]);
})
test('getCommands -> 34', () => {
	expect(interpreter.getCommands(34)).toEqual(new Error("expected string, got number"));
})
test('getCommands -> {}', () => {
	expect(interpreter.getCommands({})).toEqual(new Error("expected string, got object"));
})
test('getCommands -> ', () => {
	expect(interpreter.getCommands()).toEqual(new Error("expected string, got undefined"));
})



test('getPlaceCoordinates -> 1,2,north', () => {
	expect(interpreter.getPlaceCoordinates("1,2,north")).toEqual({
		x: 1,
		y: 2,
		direction: "north"
	});
})

test('getPlaceCoordinates -> north,2,north', () => {
	expect(interpreter.getPlaceCoordinates("north,2,1")).toEqual({
		x: NaN,
		y: 2,
		direction: "1"
	});
})
