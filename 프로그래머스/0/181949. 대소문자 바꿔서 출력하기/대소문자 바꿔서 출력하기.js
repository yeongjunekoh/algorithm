const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = Array.from(line);
}).on('close',function(){
    const regx = /[A-Z]/;
    console.log(input.map((item) => {
        if(regx.test(item)) return item.toLowerCase();
        else return item.toUpperCase();
    }).join(''));
});