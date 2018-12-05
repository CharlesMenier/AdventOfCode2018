const fs = require('fs');

const inputRegex = /#([0-9]*) @ ([0-9]*),([0-9]*): ([0-9]*)x([0-9]*)/;

const input = fs
    .readFileSync('./input3.txt', 'utf8')
    .split('\n')
    .filter(a => a);

const area = Array(1000).fill(Array(1000).fill(0));


function parseClaim(claim) {
    const data = inputRegex.exec(claim);

    return {
        id: parseInt(data[1]),
        left: parseInt(data[2]),
        top: parseInt(data[3]),
        width: parseInt(data[4]),
        height: parseInt(data[5]),
    }
}

//input.map(data => {
    const claim = parseClaim(input[0]);

    console.log(claim);

    for(let i = claim.left; i < claim.left + claim.width; i++) {
        for(let j = claim.top; j < claim.top + claim.height; j++) {

            console.log('i = ', i, ' j = ', j);
            area[i][j]++;
        }
    }

//});


const result = area.reduce((acc, current) => acc + current.filter(cell => cell > 1).length, 0);

console.log('Result is : ', result);

