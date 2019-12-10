// var, let, const (don't want to use var any more because it's globally scoped) whereas let & const have a block level scope (const must be initialised and cannot be reassigned)

// String, Numbers, Boolean, null, undefined, Symbol
// console.log(typeof name);

const name = 'John';
const age = 30;
/* const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined
let w = []; */

console.log('My name is ' + name + ' and I am ' + age);
// Template String/Literals
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

// String manipulation

const s = 'Hello World!';

console.log(s.substring(0,5).toUpperCase());

console.log(s.split(''));

const words = 'technology, computers, it, code';
console.log(words.split(', '));

// turnery operator
const x = 10;
const color = x > 10 ? 'red' : 'blue';

// switch

switch (color) {
    case 'red': 
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNums(5, 5));

//arrow function
const addNums2 = (num1 = 1, num2 = 2) => console.log(num1 + num2);
addNums2(10, 10);

const addNums3 = (num1 = 1, num2 = 2) => num1 + num2;
console.log(addNums3(4,4));

const addFive = num1 => num1 + 5;
console.log(addFive(5));

//lexical this