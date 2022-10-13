// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const value1 = false;
const value2 = false;
let path = '';

if (value1 && !value2) {
  path = 'if';   // value1= true and value 2=false
} else if (!value1 || !value2) {
  path = 'else if 1';  // value1= false and value 2=true
} else if (value2 && !value1) {
  path = 'else if 2';   // unreachable path
} else {
  path = 'else';  // unreachable path
}

console.log(path);

console.log('-- end --');
