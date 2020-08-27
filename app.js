// alert('HELLO WORLD ');

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
   const hobbies = ['movies', 'music'];
   
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
// this property represents the ratio of the circumference of a circle to its diameter, approx 3.14159
val = Math.PI;
// This property represents the base of natural logarithms, e, approximately 2.718.
val = Math.E;
// Round to the nearest 
val = Math.round(2.8);
// round up no matter what
val = Math.ceil(2.4);
// round down
val = Math.floor(2.8);
// this function returns the square root of a number, 
val = Math.sqrt(64);
// absolute number 
val = Math.abs(-3); // = will give you the absolute num 3
// this function returns the base to the exponent power
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
val = firstName[2];

// indexOf() to know the index of a character
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l'); // it goes the other way

// charAt() to know the character at that position 
val = firstName.charAt('2');

// get last character
val = firstName.charAt(firstName.length -1);

// get substring() to get characters from a point to another
val = firstName.substring(0, 4);

// slice() to use in strings and arrays 
val = firstName.slice(0, 4);
val = firstName.slice(-3); // this will start from the back 

// split() this will turn them into a separated array
val = str.split(' '); // ex ["G", "l", "a", "d"]
val = tags.split(',');  // ex ["Glad"]

// replace() replace something inside a string (add the original, the new one)
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

// to print in the console all the information 
document.body.innerHTML = html;


// ARRAYS AND ARRAYS METHODS

// Ways to create arrays 
const newNumbers = [1,2,3,4,5, 45, 56, 67, 90];
const newNumbers2 = new Array(22, 45, 33,76);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mix = [45, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val3;

// Get array length
val3 = newNumbers.length;

// Check if is array
val3 = Array.isArray(numbers);

// Get a single value from array  (will return the number in that index passed)
val3 = newNumbers[3];
val3 = newNumbers[0];

// Insert into array the number 100 in the index 2
newNumbers[2] = 100;

// Find index of a value inside the array
val3 = newNumbers.indexOf(45);

// MUTATING ARRAYS with functions 
// Add to the end of array - last value
newNumbers.push(250);

// Add to the front of array - first value
newNumbers.unshift(120);

// Take off from the end 
newNumbers.pop();

// Take off from the beggining 
newNumbers.shift();

// Splice values (where to start and where to end)
newNumbers.splice(1, 3);

// Reverse array 
newNumbers.reverse();

// Concatenate array
val3 = newNumbers.concat(newNumbers2);

// Sorting array in alphabetical order 
val3 = fruit.sort();
val3 = newNumbers.sort (); // this is concatenating but just by the first number

// Use the "compare function" to order the numbers taking into account all the values 
val3 = newNumbers.sort(function(x, y) {
  return x - y;
});

// Reverse sort 
val3 = newNumbers.sort(function(x, y) {
  return y - x;
});

// Find 
function under50(num){
  return num < 50;
};

// This just gets the first number under50 in order, make sure it is not sorted 
val3 = newNumbers.find(under50);

console.log(newNumbers);
console.log(val3);

// OBJECT LITERALS 

const newPerson = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 26,
  email: 'steve@hotmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2020 - this.age,
  }
};

let val;
val = newPerson;

// Get specific value 
val = newPerson['firstName'];
val = newPerson.firstName;
val = newPerson.age;
val = newPerson.hobbies[1]; // to select a specifi value with the index
val = newPerson.address['city'];
val = newPerson.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 25}
];

for(let i = 0; i < people.length; i++){
 console.log(people[i].name);
};

// DATES AND TIMES

let value;

const today = new Date();
const birthday = new Date('11-01-1993 03:00:00');
birthday = new Date('November 1 1993 03:00:00');
birthday = new Date('11/01/1993');

value = today.getMonth(); // is zero based meaning January will be month 0
value = today.getDate();
value = today.getDay(); // numerical representation of the day sun- to mon in numbers 
value = today.getFullYear() // year
value = today.getHours(); 
value = today.getMinutes();
value = today.getSeconds();
value = today.getMilliseconds();
value = today.getTime(); // the amount of seconds passed since January it reloads 


birthday.setMonth(2); // Change month 
birthday.setDate(12); //  change day of month
birthday.setFullYear(1993);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(29);

value = today.toString; // date to string  use .toString
console.log(value);
console.log(typeof value); // will get an object as it is the date 