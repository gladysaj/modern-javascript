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
// let greeting;
console.log(greeting); // undefined 
greeting = 'Hello';

// The only characters that can be inside of a variable = letters, numbers, underscore, $ 
// Can not start with a number = syntax error
// Multi word variables 
let firstName = '' // Camel case 
let first_name = '' // Underscore  (mostly used in PHP)
let FirstName = '' // Pascal case (for a constructor function, create a class)

// Const 
// const name = 'John';
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
// const name = 'John Doe';
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


// NUMBERS AND THE MATH OBJECT 

const num1 = 100;
const num2 = 50;
// let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object 
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
// round up 
val = Math.ceil(2.4);
// round down
val = Math.floor(2.8);
val = Math.sqrt(64);
// absolute number 
val = Math.abs(-3); // = will give you the absolute num 3

val = Math.pow(8, 2);
// return minimum
val = Math.min(2,33,56,8);
val = Math.max(2,33,56,8);
// get a random decimal number
val = Math.random();
// random number with decimal and between 0 to 20
val = Math.random() * 20;
// get random number without decimals 
val = Math.floor(Math.random() * 20 +1);

/* Math is an object = it has properties and methods 
Properties = an attribute
Method = a function inside of an object 
*/

console.log(val);


// STRING METHODS AND CONCATENATION 


// const firstName = 'William';
const lastName = 'Johnson';
// const age = 50;
const str = 'Hello my name is Gladys';
const tags = 'web desing, ux, ui';

// let val;

val = firstName + lastName;

// Concatenation
val = firstName + '' + lastName;

// Append  (add but not replace)
val = 'Gladys';
val += 'Alvarez';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping  (to be able to use ' in a sentence, use "" or \)
val = "That's awesome , i can't wait"

// Length property
val = firstName.length;

// concat() method to separate
val = firstName.concat(' ', lastName);

// Change case 
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Get a character 
val = firstName[2]

// indexOf() to know the index of a character
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l'); // go the other way

// charAt() to know the character at that position 
val = firstName.charAt('2');

// get last character
val = firstName.charAt(firstName.length -1);

// get substring() to get characters from 0 to 4
val = firstName.substring(0, 4);

// slice() to use in strings and arrays 
val = firstName.slice(0, 4);
val = firstName.slice(-3); // this will start from the back 

// split() this will turn them into an array
val = str.split(' ');
val = tags.split(','); 

// replace() replace something inside a string 
val = str.replace('Gladys', 'Brad');

// includes() true or false, values are based if something is on the string 
val = str.includes('Hello');


// TEMPLATE LITERALS 

// const name = 'John';
// const age = 30;
const job = 'Web developer';
const city = 'Miami';
let html;

// Without template strings ES5
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + '</li><li>City:' 
+ city + '</li><ul>';

// Same as 
html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + ' </li>' +
        '</ul>';

function hello() {
  return 'hello';
}

// With template strings ES6
html = `
  <ul>
   <li>Name: ${name}</li>
   <li>Age: ${age}</li>
   <li>Job: ${job}</li>
   <li>${2 + 2}</li> 
   <li> ${hello()}</li>
   <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
 </ul>
`;


document.body.innerHTML = html;