const Grid = require('./Grid');
const Pacman = require('./Pacman');
const interpreter = require('./Interpreter');
const IO = require('./IO');




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

let pacman;
const grid = new Grid(5,5);

help();

IO.recursiveRequestCommand(commands => {

    const commandsList = interpreter.getCommands(commands);
    if(commandsList === null){
        console.error(`"${commands}" is not a valid command`);
        return;
    }

    for(commandNum = 0; commandNum < commandsList.length; commandNum ++){
        if (typeof pacman !== "object"){
            noPac(commandsList);
        } else {
            pacReady(commandsList);
        }
    }
});

function noPac(commandsList){
    const command = commandsList[commandNum];
    switch (command){
        case "exit": return "exit";
        case "place":
            createPac(commandsList);
        break;
        default:
            console.error(`Please place Pacman on the map first by using the "PLACE" command.`);
        break;
    }
}
function pacReady(commandsList){
    const command = commandsList[commandNum];
    switch (command){
        case "exit": return "exit";
        case "place":
            createPac(commandsList);
        break;
        case "move":
            pacman.move();
        break;
        case "left":
            pacman.turnLeft();
        break;
        case "right":
            pacman.turnRight();
        break;
        case "report":
            pacman.report();
        break;
        default:
            console.error(`"${commands}" is not a valid command`);
        break;
    }
}


function createPac(commandsList){
    const coordsString = commandsList[commandNum+1];
    commandNum++;
    const placeCoords = interpreter.getPlaceCoordinates(coordsString);
    if(!grid.isInsideMap(placeCoords.x, placeCoords.y)){
        console.error(`(${placeCoords.x}, ${placeCoords.y}) is not inside the grid (${grid.size.x}, ${grid.size.y}). Please try placing Pacman again`);
        return;
    } else {
        pacman = new Pacman(placeCoords.x, placeCoords.y, placeCoords.direction, grid);

        console.dir(grid, pacman.grid);
    }
}
