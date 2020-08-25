alert('HELLO WORLD ');

// Log to console
console.log('Hello Gladys');
console.log(233);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, a:2});
console.table({a:1, a:2})

/*
multi line 
comments 
*/

//Variables var, let, const 

// Declare a variable 
let name = 'Gladys';
console.log(name);

// Modify a variable 
name = 'John Doe';
console.log(name);

// Initialize a variable 
let greeting;
console.log(greeting); // undefined 
greeting = 'Hello'

// The only characters that can be inside of a variable = letters, numbers, underscore, $ 
// Can not start with a number = syntax error
// Multi word variables 
let firstName = '' // Camel case 
let first_name = '' // Underscore  (mostly used in PHP)
let FirstName = '' // Pascal case (for a constructor function, create a class)

// Const 
const name = 'John';
console.log('John');

//Can not reassign
name = 'Gladys';

// We have to assign a value always 

const person = {
  name: 'John',
  age: 30
}

// Way to reassign 
person.name = 'Gladys';
person.age = 26;

console.log(person);

// Add number to array
const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers)