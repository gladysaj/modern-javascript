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
greeting = 'Hello';

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

// DATA TYPES 

// PRIMITIVE DATA TYPES:
/* 
Store directly in the location the variable accesses 
Stored on the stack 
String, Number, Boolean, Null, Undefined, Symbols (ES6)
*/

// String
const name = 'John Doe';
// Number
const age = 26;
// Boolean
const hasKids = true;
// Null (object)
const car = null;
// Undefined 
let test; // undefined 
// Symbol
const sym = Symbol();

console.log(typeof name);

// REFERENCE DATA TYPES:
/* 
Accessed by reference 
Objects that are stored on the heap 
A pointer to a location in memory 
Arrays, Object Literals, Functions, Dates, Anything else 
*/

   // Arrays
   const hobbies = [ 'movies', 'music'];
   
   // Object literal
   const address = {
     city: 'Boston',
     state: 'MA'
   }

   const today = new Date();
   console.log(today);

   console.log(typeof hobbies);

   // TYPE CONVERSION (changing the type of a variable)

   let val;

   // Number to String
   val = String(5);
   val = String(5+5);

   // Boolean to String
   val = String(true);

   // Date to String 
   val = String(new Date());

   // Array to String
   val = String([1,2,3,4]);

   // toString() method
   val = (5).toString();
   val = (true).toString();

   // String to Number 
   val = Number('5');
   val = Number(true); // = 1
   val = Number(false); // = 0
   val = Number(null); // = 0
   val = Number('Hello'); // NaN
   val = Number([1,2,3]); //= NaN

   // Always leave it without decimals 
   val = parseInt('100.30'); // = 100
   // Use decimals 
   val = parseFloat('100.30'); // = 100.3 (withouth the last 0, to added it you can use toFixed(2))

   // Output 
   console.log(val);
   console.log(typeof val)
   console.log(val.length) // only works on strings to give you the number of characters
   console.log(val.toFixed()); // only works with numbers, you can specify decimals 


   const val1 = 5; // this can be = 56 if we use String()
   const val2 = 6;
   const sum = val1 + val2;

   console.log(sum); // = 11
   console.log(typeof sum); // = number
