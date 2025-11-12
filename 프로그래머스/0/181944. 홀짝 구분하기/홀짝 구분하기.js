const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const inputNumber = Number(input[0]);
    const isEven = Number(input[0]) %2 === 0;
    console.log(`${inputNumber} is ${isEven ? 'even' : 'odd'}`)
});