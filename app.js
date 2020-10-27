// alert('HELLO WORLD ');

// Log to console
// console.log('Hello Gladys');
// console.log(233);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, a:2});
// console.table({a:1, a:2})

/*
multi line 
comments 
*/

//Variables var, let, const 

// Declare a variable 
// let name = 'Gladys';
// console.log(name);

// Modify a variable 
// name = 'John Doe';
// console.log(name);

// Initialize a variable 
// let greeting;
// console.log(greeting); // undefined 
// greeting = 'Hello';

// The only characters that can be inside of a variable = letters, numbers, underscore, $ 
// Can not start with a number = syntax error
// Multi word variables 
// let firstName = '' // Camel case 
// let first_name = '' // Underscore  (mostly used in PHP)
// let FirstName = '' // Pascal case (for a constructor function, create a class)

// Const 
// const name = 'John';
// console.log('John');

//Can not reassign
// name = 'Gladys';

// We have to assign a value always 
// const person = {
//   name: 'John',
//   age: 30
// }

// Way to reassign 
// person.name = 'Gladys';
// person.age = 26;

// console.log(person);

// Add number to array
// const numbers = [1,2,3,4,5];
// numbers.push(6);

// console.log(numbers)

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
// const age = 26;
// Boolean
// const hasKids = true;
// Null (object)
// const car = null;
// Undefined 
// let test; // undefined 
// Symbol
// const sym = Symbol();

// console.log(typeof name);

// REFERENCE DATA TYPES:
/* 
Accessed by reference 
Objects that are stored on the heap 
A pointer to a location in memory 
Arrays, Object Literals, Functions, Dates, Anything else 
*/

   // Arrays
  //  const hobbies = ['movies', 'music'];
   
   // Object literal
  //  const address = {
  //    city: 'Boston',
  //    state: 'MA'
  //  }

  //  const today = new Date();
  //  console.log(today);

  //  console.log(typeof hobbies);

   // TYPE CONVERSION (changing the type of a variable)

  //  let val;

   // Number to String
  //  val = String(5);
  //  val = String(5+5);

   // Boolean to String
  //  val = String(true);

   // Date to String 
  //  val = String(new Date());

   // Array to String
  //  val = String([1,2,3,4]);

   // toString() method
  //  val = (5).toString();
  //  val = (true).toString();

   // String to Number 
  //  val = Number('5');
  //  val = Number(true); // = 1
  //  val = Number(false); // = 0
  //  val = Number(null); // = 0
  //  val = Number('Hello'); // NaN
  //  val = Number([1,2,3]); //= NaN

   // Always leave it without decimals 
  //  val = parseInt('100.30'); // = 100
   // Use decimals 
  //  val = parseFloat('100.30'); // = 100.3 (without the last 0, to add it you can use toFixed(2))

   // Output 
  //  console.log(val);
  //  console.log(typeof val)
  //  console.log(val.length) // only works on strings to give you the number of characters
  //  console.log(val.toFixed()); // only works with numbers, you can specify decimals


  //  const val1 = 5; // this can be = 56 if we use String()
  //  const val2 = 6;
  //  const sum = val1 + val2;

  //  console.log(sum); // = 11
  //  console.log(typeof sum); // = number


// NUMBERS AND THE MATH OBJECT 

// const num1 = 100;
// const num2 = 50;
// let val;

// Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// Math object 
// this property represents the ratio of the circumference of a circle to its diameter, approx 3.14159
// val = Math.PI;
// This property represents the base of natural logarithms, e, approximately 2.718.
// val = Math.E;
// Round to the nearest 
// val = Math.round(2.8); = 3
// round up no matter what, for example less than .5
// val = Math.ceil(2.4); = 3
// round down
// val = Math.floor(2.8); = 2
// this function returns the square root of a number, 
// val = Math.sqrt(64); = 8
// absolute number 
// val = Math.abs(-3); // = will give you the absolute num 3
// this function returns the base to the exponent power
// val = Math.pow(8, 2);
// return minimum
// val = Math.min(2,33,56,8); = 2
// val = Math.max(2,33,56,8); = 56
// get a random decimal number
// val = Math.random();
// random number with decimal and between 0 to 20
// val = Math.random() * 20;
// get random number without decimals 
// val = Math.floor(Math.random() * 20 +1);

/* Math is an object = it has properties and methods 
Properties = an attribute
Method = a function inside of an object 
*/

// console.log(val);


// STRING METHODS AND CONCATENATION 


// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 50;
// const str = 'Hello my name is Gladys';
// const tags = 'web desing, ux, ui';

// let val;

// val = firstName + lastName;

// Concatenation
// val = firstName + '' + lastName;

// Append  (add but not replace)
// val = 'Gladys';
// val += 'Alvarez'; = 'GladysAlvarez'

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping  (to be able to use ' in a sentence, use "" or \)
// val = "That's awesome , i can't wait"

// Length property
// val = firstName.length;

// concat() method to separate
// val = firstName.concat(' ', lastName);

// Change case 
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// Get a character 
// val = firstName[2];

// indexOf() to know the index of a character
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l'); // it goes the other way

// charAt() to know the character at that position 
// val = firstName.charAt('2');

// get last character
// val = firstName.charAt(firstName.length -1);

// get substring() to get characters from a point to another (doesn't include last one)
// val = firstName.substring(0, 4);

// slice() to use in strings and arrays 
// val = firstName.slice(0, 4); (doesn't include last one)
// val = firstName.slice(-3); // this will start from the back 

// split() this will turn them into a separated array
// val = str.split(' '); // ex ["G", "l", "a", "d"]
// val = tags.split(',');  // ex ["Glad"]

// replace() replace something inside a string (add the original, add the new one)
// val = str.replace('Gladys', 'Brad'); --> doesn't change the original one 

// includes() true or false, values are based if something is on the string (exactly lower or upper cased)
// val = str.includes('Hello');


// TEMPLATE LITERALS 

// const name = 'John';
// const age = 30;
// const job = 'Web developer';
// const city = 'Miami';
// let html;

// Without template strings ES5
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + '</li><li>City:' 
// + city + '</li><ul>';

// Same as 
// html = '<ul>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + ' </li>' +
//         '</ul>';

// function hello() {
//   return 'hello';
// }

// With template strings ES6
// html = `
//   <ul>
//    <li>Name: ${name}</li>
//    <li>Age: ${age}</li>
//    <li>Job: ${job}</li>
//    <li>${2 + 2}</li> 
//    <li> ${hello()}</li>
//    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//  </ul>
// `;

// to print in the console all the information 
// document.body.innerHTML = html;


// ARRAYS AND ARRAYS METHODS

// Ways to create arrays 
// const newNumbers = [1,2,3,4,5, 45, 56, 67, 90];
// const newNumbers2 = new Array(22, 45, 33,76);
// const fruit = ['apple', 'banana', 'orange', 'pear'];
// const mix = [45, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val3;

// Get array length
// val3 = newNumbers.length; --> count normal without indexes

// Check if is array
// val3 = Array.isArray(numbers); = true, false 

// Get a single value from array  (will return the number in that index passed)
// val3 = newNumbers[3];
// val3 = newNumbers[0];

// Insert into array the number 100 in the index 2
// newNumbers[2] = 100; --> this changes the original array in that index positionm

// Find index of a value inside the array
// val3 = newNumbers.indexOf(45);

// MUTATING ARRAYS with functions 
// Add to the end of array - last value
// newNumbers.push(250);

// Add to the front of array - first value
// newNumbers.unshift(120);

// Take off from the end 
// newNumbers.pop();

// Take off from the beggining 
// newNumbers.shift();

// Splice values (where to start and where to end)
// newNumbers.splice(1, 3);

// Reverse array 
// newNumbers.reverse();

// Concatenate array
// val3 = newNumbers.concat(newNumbers2);

// Sorting array in alphabetical order 
// val3 = fruit.sort();
// val3 = newNumbers.sort (); // this is concatenating but just by the first number

// Use the "compare function" to order the numbers taking into account all the values 
// val3 = newNumbers.sort(function(x, y) {
//   return x - y;
// });

// // Reverse sort 
// val3 = newNumbers.sort(function(x, y) {
//   return y - x;
// });

// Find 
// function under50(num){
//   return num < 50;
// };

// This just gets the first number under50 in order, make sure it is not sorted 
// val3 = newNumbers.find(under50);

// console.log(newNumbers);
// console.log(val3);

// OBJECT LITERALS 

// const newPerson = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 26,
//   email: 'steve@hotmail.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL'
//   },
//   getBirthYear: function() {
//     return 2020 - this.age,
//   }
// };

// let val;
// val = newPerson;

// Get specific value 
// val = newPerson['firstName'];
// val = newPerson.firstName;
// val = newPerson.age;
// val = newPerson.hobbies[1]; // to select a specific value with the index
// val = newPerson.address['city'];
// val = newPerson.getBirthYear();

// console.log(val);

// const people = [
//   {name: 'John', age: 30},
//   {name: 'Mike', age: 25}
// ];

// for(let i = 0; i < people.length; i++){
//  console.log(people[i].name);
// };

// DATES AND TIMES

// let value;

// const today = new Date();
// let birthday = new Date('11-01-1993 03:00:00');
// birthday = new Date('November 1 1993 03:00:00');
// birthday = new Date('11/01/1993');

// value = today.getMonth(); // is zero based meaning January will be month 0
// value = today.getDate();
// value = today.getDay(); // numerical representation of the day sun- to mon in numbers 
// value = today.getFullYear() // year
// value = today.getHours(); 
// value = today.getMinutes();
// value = today.getSeconds();
// value = today.getMilliseconds();
// value = today.getTime(); // the amount of seconds passed since January it reloads 


// birthday.setMonth(2); // Change month 
// birthday.setDate(12); //  change day of month
// birthday.setFullYear(1993);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(29);

// value = today.toString; // date to string  use .toString
// console.log(value);
// console.log(typeof value); // will get an object as it is the date 

// IF STATEMENTS & COMPARISON OPERATORS 

// const id = 100; 

// EQUAL TO
// if(id == 102){
//   console.log('Correct')
// } else {
//   console.log('Incorrect')
// };

// NOT EQUAL TO
// if(id !== 200){
//   console.log('Correct')
// } else {
//   console.log('Incorrect')
// };

// EQUAL TO VALUE AND SIGN  (with === it will evaluate the value too for example if it is a String)
// if(id === 100){
//   console.log('Correct')
// } else {
//   console.log('Incorrect')
// };

// TEST IF VALUE IS UNDEFINED 
// if(typeof id !== 'undefined'){
//   console.log(`This is the ID: ${id}`);
// } else {
//   console.log(`There is no ID`);
// }

// GREATER THAN OR LESS THAN (>, <, <=, >=, )
//  if(id => 200){
//   console.log('Correct')
// } else {
//   console.log('Incorrect')
// };

// IF ELSE
// const color = 'Red';

// if(color === 'Red'){
//   console.log(`Color is red`);
// } else if(color === 'Blue') {
//   console.log(`Color is blue`);
// } else {
//   console.log('Color is not red or blue');
// };

// LOGICAL OPERATORS 
// const userName = 'Gladys';
// const age1 = 90;

// AND &&
// if(age1 > 0 && age < 12){
//   console.log(`${userName} is a child`);
// } else if(age1 >= 13 && age1 <= 19){
//   console.log(`${userName} is a teenager`);
// } else {
//   console.log(`${userName} is an adult`);
// };

// OR ||
// if(age < 16 || age > 65){
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} is registered for the race`);
// };

// // TERNARY OPERATOR <3
// console.log(id === 100 ? 'Correct' : 'Incorrect');

// // WITHOUT BRACES (not suggested)
// if(id === 105)
//   console.log('Correct');
// else 
//   console.log('INCORRECT');


// // SWITCHES (another way to validate conditions)
// // Use this instead of plenty of else if's
// const colored = 'blue';

// switch(colored){
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   default:
//     console.log('Color is not red or blue')
// };

// // GET DAY OF THE WEEK

// let day;

// switch(new Date().getDay()){
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Thursday';
//     break;
//   case 4:
//     day = 'Friday';
//     break;
//   case 5:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`);


// FUNCTION DECLARATIONS & EXPRESSIONS 

// function greet(firstName = 'Gladys', lastName = 'Doe') {
  // console.log('Hello')
  // if(typeof firstName === 'undefined'){firstName === 'Gladys'}
  // if(typeof lastName === 'undefined'){lastName === 'Doe'}
//   return 'HELLO ' + firstName + ' ' +lastName;
// };

// console.log(greet());

// FUNCTION EXPRESSIONS

// const square = function(x = 3){
//   return x*x;
// };

// console.log(square(8));

// // IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS = IIFEs

// (function(){
//    console.log('IIFE')
// })();

// (function(name){
//   console.log('Hello ' + name)
// })('Brad');

// // PROPERTY METHODS - A function inside of an object 

// const todo = {
//   add: function(){
//     console.log('Add todo..')
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`)
//   }
// };

// todo.delete = function(){
//   console.log('Delete todo...')
// };

// todo.add();
// todo.edit(22);
// todo.delete();


// GENERAL LOOPS 

// For loop (use it when you know how many times it will run)
// declare variable, condition , increment
// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('Two is my favorite number');
//     continue; // to keep going with the next iteration don't repeat two
//   }
//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }
//     console.log('Number' + i);
// };

// While loop
// Just add the condition 
// let i = 0;

// while(i < 10){
//   console.log('Number' + i);
//   i++;
// }; 

// DO WHILE (this runs always one time no matter what)

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }
// while (i < 10);


// LOOP THROUGH ARRAY 

// const cars = ['Ford', 'Chevy', 'Honda'];
// cars[1];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[1]);
// };

// FOREACH LOOP TRHOUGH ARRAY
// it can take the iterator and the index
// cars.forEach(function(car, index){
//   console.log(`${index} : ${car}`);
  // console.log(array); // to access the whole array
// });

// MAP = to return a different array

// const users = [
//   {id: 1, name: 'Sara'},
//   {id: 2, name: 'Sara2'},
//   {id: 3, name: 'Sara3'},
// ];

// const ids = users.map(function(user){
//    return user.id;
// });

// console.log(ids);

// FOR IN LOOP FOR OBJECTS
// inside of an object a key and value pair 
// const user = {
//   firstName = 'Polansky',
//   lastName = 'Doe',
//   age: 25
// };

// for(let x in user ){
//  console.log(`${x} : ${user[x]}`); // x just will give us the key 'firstName'
// };

// WINDOW OBJECT -- DOM
// Window methods / objects / properties 

// window.console.log(123);

// Alert
// window.alert('HI');

// Prompt 
// const input = prompt();
// alert(input);

// Confirm 
// if(confirm('Are you sure')){
//   console.log('yes');
// } else {
//   console.log('no');
// };

// Properties
// let valuee;

// Outter height and width
// valuee = window.outerHeight;
// valuee = window.outerWidth;

// Inner height and width
// valuee = window.innerHeight;
// valuee = window.innerWidth;

// Scroll Points 
// vall = window.scrollY;

// Location Object
// val = window.location;
// val = window.location.hostname; 
// val = window.location.port; 
// val = window.location.href; 
// val = window.location.search;  // what is add to the search bar in the link

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History Object 
// window.history.go(-1); // it depends on the number to the page it will go back in the history
// length = window.history.length;

// Navigator Object
// valv = window.navigator;
// valv = window.navigator.appName;
// valv = window.navigator.appversion;
// valv = window.navigator.userAgent;
// valv = window.navigator.platform;
// valv = window.navigator.vendor;
// valv = window.navigator.language;


// console.log(valuee);
// console.log(vall);
// console.log(val);
// console.log(valv)
// console.log(length)


// BLOCK SCOPE WITH LET AND CONST 
// Global scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function scope ', a, b, c)
// };

// test();

// if(true) {
 // Block scope
//  var a = 4;
//  let b = 5;
//  const c = 6;
//  console.log('If scope ', a, b, c) // result now is taking a from the block and b , c from global 
// }


// for(var a = 0; a < 10; a++) { // this will change if it is var (let and const have a block scope)
//  console.log(`Loop ${a}`);
// }

// console.log('Global scope ', a, b, c);


// ...........................................
// SECTION THREE - DOM MANIPULATION AND EVENTS 
// Document object model 
// Tree of nodes / elements created by the browser


// EXAMINING THE DOCUMENT OBJECT MODEL 

// let val;

// val = document; // This is equals to the entire html document 

// val = document.all; // This looks like an array starting with the tags
// val = document.all[0] // This will give you the <html> element
// val = document.all[1] // Result is next element = <head> and so on <meta>
// val = document.all.length; // This counts all the elements 
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// Get elements from the form tag
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// Links
// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// Images
// val = document.images;

// Scripts
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// Convert to array to be able to use forEach and get all the scripts 
// let scriptsArr = Array.from(scripts); 

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// }); // This is an error because forEach can only be used with arrays 

// console.log(val);


// DOM SELECTORS FOR SINGLE ELEMENTS 

// Single element selector it is just going to grab the first one 
// document.getElementById();

// console.log(document.getElementById('task-title'));

// Get things from the element 
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title'); // with this we can use taskTitle directly

// Change styling 
// taskTitle.style.background = 'goldenrod'; 
// document.getElementById('task-title').style.color = 'red';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none'; // to desappear text

// Change the content 
// document.getElementById('task-title').textContent = 'Task List example';
// document.getElementById('task-title').innerText = 'My tasks';
// document.getElementById('task-title').innerHTML = '<span style="color: red"> Task list </span>';

// document.querySelector()
// console.log(document.querySelector('#task-title')); // get by id 
// console.log(document.querySelector('.card-title')); // get by class
// console.log(document.querySelector('h5')); // will get just the first one 

// document.querySelector('li').style.color = 'red'; // just the first li
// document.querySelector('ul li').style.color = 'blue';
// document.querySelector('ul li').style.color = 'green';

// document.querySelector('li:last-child').style.color = 'red'; // the last one on the list
// document.querySelector('li:nth-child(3)').style.color = 'goldenrod';
// document.querySelector('li:nth-child(4)').textContent= 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // just works for the first odd
// document.querySelector('li:nth-child(even)').style.background = '#f3f3';


// DOM SELECTORS FOR MULTIPLE ELEMENTS

// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);  // get the first one
// items[0].style.color = 'red'; // style collection index 0
// items[3].textContent = 'Hi'; 

// const listItems = document.querySelector('ul').getElementsByClassName('collection-items');
// console.log(listItems);

// document.getElementsByTag
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);  // get the first one
// items[0].style.color = 'red'; // style collection index 0
// items[3].textContent = 'Hi'; 

// Convert HTML Collection into array 
// lis = Array.from(lis);

// lis.reverse(); // this won't work because is not an array 
// lis.forEach(function(li) {
//   console.log(li.className)
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index) {
//   item.textContent = `${index}: Hi`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index) {
//    li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++) {
//     liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);


// TRAVERSING THE DOM - Move up and down 

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// Get child nodes (this happens due to the break in the HTML)
// val = list.childNodes; // result is the list with the li's and text line 
// val = list.childNodes[0]; // text
// val = list.childNodes[0].nodeName; // text
// val = list.childNodes[3].nodeType; //  comment added in the HTML = 8

// Types of nodes 

// 1 - Element 
// 2 - Attribute (deprecated)
// 3 - Text node 
// 8 - Comment 
// 9 - Document itself 
// 10 - Doctype 

// Get children element nodes (returns an HTML collection )
// val = list.children; // just the elements without the text break
// val = list.children[0]; // = first li 
// list.children[1].textContent = 'Hello Gladys'; // change the text in the li

// Children of children 
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children;

// First child
// val = list.firstChild; // like the first childnode = text 
// val = list.firstElementChild; // get the element directly 

// Last child 
// val = list.lastChild;
// val = list.lastElementChild;

// Count child elements 
// val = list.childElementCount; // get the 5 children li's of the ul. 

// Get parents node 
// val = listItem.parentNode; //  to get the ul 
// val = listItem.parentElement;
// val = list.parentElement.parentElement; // to get the div

// Get next sibling
// val = listItem.nextSibling; // equals to text works like a child 
// val = listItem.nextElementSibling; // to get the second li element 
// val = listItem.nextElementSibling.nextElementSibling; // to get the third one

// Get previous sibling 
// val = listItem.previousSibling; // text node
// val = listItem.previousElementSibling; // null nothing up

// console.log(val);

// CREATING ELEMENTS

// const li = document.createElement('li');

// Add class
// li.className = 'collection-item';

// Add id 
// li.id = 'new-item';

// Add attribute 
// li.setAttribute('title', 'New item');

// Create text node and append (append = to put something inside)
// li.appendChild(document.createTextNode('Hello world'));

// // Create new link element 
// const link = document.createElement('a');

// Add classes
// link.className = 'delete-item secondary-content';

// Add icon HTML 
// link.innerHTML = '<i class= "fa fa-remove"></i>';

// Append link into li 
// li.appendChild(link);

// Append li as child to ul 
// document.querySelector('ul.collection').appendChild(li); // to get a new li line 

// console.log(li);

// REMOVING AND REPLACING ELEMENTS 

// Create element 
// const newHeading = document.createElement('h2');

// Add id 
// newHeading.id = 'task-title';

// New text node 
// newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading 
// const oldHeading = document.getElementById('task-title');
// Parent 
// const cardAction = document.querySelector('.card-action');

// Replace 
// cardAction.replaceChild(newHeading, oldHeading); // second parameter is the one replaced

// console.log(newHeading);

// Remove element 
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');  

// Remove a specific list item 
// lis[0].remove();

// // Remove child element 
// list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTES 

// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// Classes
// val = link.className; // to get the classes the link has
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// Attributes 
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// val = link.hasAttribute('href');
// link.setAttribute('title', 'Google');
// link.removeAttribute('title');
// val = link;
 
// console.log(val);


// EVENT LISTENERS & THE EVENT OBJECT 

// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//   console.log('Hello World');
//   // e.preventDefault(); // we can add a # in the href in the html to prevent the behaviour (page refresh)
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);
//  function onClick(e){
//   //  console.log('Clicked');

//   let val; 

//   val = e;

//   // Event target element 
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   e.target.innerText = 'Hello';

//   // Event type 
//   val = e.type;

//   // Timestamp
//   val = e.timeStamp;

//   // Coords event relative to the window (Position when you clicked)
//   val = e.clientY;
//   val = e.clientX;

//   // Coords event relative to the element
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val)
//  }

































