// Read user input

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const recursiveRequestCommand = (cb) => {
    readline.question('COMMAND: ', command => {
		cb(command);
        recursiveRequestCommand(cb);
    })
}

module.exports = {
	recursiveRequestCommand,
}
