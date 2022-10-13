// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'x';
let temp;

// --- swap values ---
temp=b;
b=a;
a=temp;
// --- test final values ---
console.assert(temp=='x','test1');
console.assert(b=='y','test2');
console.assert(a='x','test3')

const test1 = a === 'x';
console.assert(test1, 'Test 1');

const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = temp === 'x';
console.assert(test3, 'Test 3');

console.log('-- end --');
