const fs = require('fs');

const input = fs
   .readFileSync('./input1.txt', 'utf8')
   .split('\n')
   .filter(a => a)
   .map(a => parseInt(a.replace(/(-?[0-9])/g, '$1')));

// Part 1

const result1 = input.reduce((acc, current) => acc + current, 0);
console.log('Result part 1 : ', result1);


// Part 2

let hasFound = false;
let initialValue = 0;
let prev = [initialValue];
while(!hasFound) {
   initialValue = input
      .reduce((acc, current) => {
         const newValue = acc + current;
         if (prev.indexOf(newValue) > -1 && !hasFound) {
            hasFound = true;
            console.log('Result part 2 = ', newValue);
         }
         prev.push(newValue);
         return newValue;
      }, initialValue);
}
