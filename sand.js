var firstName = "Rakesh"; // String
console.log(firstName); // Prints on chrome console

var lastName = "Singh";
console.log(firstName + " "+lastName); 

var isAge = true; // Boolean 
var num = 1; // Number
var und; // Undefined
var _und = null ;// non exsitent

// Type Coersion
var firstName = 'Rakesh';
var lastName = 'Singh';
var age = 28;
console.log(firstName + ' ' + lastName + ' ' + age);

// Variable Mutation
var firstName = 'Ramesh';
var lastName = 'Rao';
var age = 'twenty eight';

alert(firstName + ' ' + lastName + ' is ' + age + ' old');

var age = 28;

var lastName = prompt('What is his last Name');
console.log(firstName + ' ' + lastName + ' is ' + age + ' old');

//Math Operator
var now, markAge, rakAge;
now = 2020;
rakAge = 2020-1994;
markAge = 2020-1995;

console.log("Mark age is : " + markAge);
console.log("Rakesh age is : " + rakAge);

console.log(rakAge*2);
console.log(rakAge/2);
console.log(rakAge%2);

//Logical Operator
var op = (rakAge<markAge);
console.log(op);

//type of operator
console.log(typeof now);
console.log(typeof op);
console.log(typeof "Hello World");

