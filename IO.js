// Read user input

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const recursiveRequestCommand = (cb) => {
    readline.question('COMMAND: ', command => {
		if(cb(command) === "exit"){
			return readline.close();
		}
        recursiveRequestCommand(cb);
    });
}

module.exports = {
	recursiveRequestCommand,
}
