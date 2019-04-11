const Grid = require('./Grid');
const Pacman = require('./Pacman');
const interpreter = require('./Interpreter');
const IO = require('./IO');

const pacman = new Pacman(new Grid(5,5));

const help = () => console.log(`

------------------------------------------
HELP:

The origin (0,0) can be considered
the SOUTH WEST most corner.

Command list:
    PLACE X,Y,DIRECTION
        Put Pacman on the grid in
        positon X,Y and facing
        NORTH,SOUTH, EAST or WEST.

        example: $ PLACE 2,3,NORTH

        Places pacman at position
        2,3 facing NORTH.
    MOVE
    LEFT
    RIGHT
    REPORT
------------------------------------------

`);


const run = () => {
    help();

    IO.recursiveRequestCommand(commands => {

        const commandsList = interpreter.getCommands(commands);
        console.log(typeof commandsList);
        if(commandsList === null){
            console.error(`"${commands}" is not a valid command`);
            return;
        }

        commandsList.forEach(command => {
            if (command === "exit") {
                return command;
            }
        });
    });
}

run();
