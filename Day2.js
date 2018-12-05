const fs = require('fs');

const input = fs
   .readFileSync('./input2.txt', 'utf8')
   .split('\n')
   .filter(a => a);

// Part 1

let doubleOccurrences = 0;
let tripleOccurrences = 0;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < input.length; i++) {
   let hasDouble = false;
   let hasTriple = false;
   const string = input[i];

   for (let j = 0; j < alphabet.length; j++) {
      const occurrences = (string.match(new RegExp(alphabet[j], 'g')) || [])
         .length;
      if (!hasDouble && occurrences === 2) {
         hasDouble = true;
         ++doubleOccurrences;
      }

      if (!hasTriple && occurrences === 3) {
         hasTriple = true;
         ++tripleOccurrences;
      }
   }
}

console.log('Result part 1 : ', doubleOccurrences * tripleOccurrences);

// Part 2

let differenceIndex = [];
for (let i = 0; i < input.length; i++) {
   const string = input[i];

   for (let j = i + 1; j < input.length; j++) {
      const compare = input[j];
      differenceIndex = [];
      // Check if length difference is no more than 1 char
      if (Math.abs(string.length - compare.length) <= 1) {
         for (let k = 0; k < Math.min(string.length, compare.length); k++) {
            if (differenceIndex.length > 1) {
               break;
            }

            if (string[k] !== compare[k]) {
               differenceIndex.push(k);
            }
         }

         if (differenceIndex.length === 1) {
            console.log(
               'Result part 2 : ',
               string.slice(0, differenceIndex[0]) +
                  string.slice(differenceIndex[0] + 1, string.length),
            );
            return;
         }
      }
   }
}
