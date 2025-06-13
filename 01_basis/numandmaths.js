const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);by converting it to string we get new properties
// console.log(balance.toFixed(1));used to have exact numbers after decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// we use this function to get commas;'en-IN'this is to convert commas to indian method ususally they are in USA method

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// default library in JS

// console.log(Math);here the output tell Math as Object

// console.log(Math.abs(-4));this is absolute value,i.e it changes -ve values to positive NOT vice-versa

// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2));round off to upper end;output:5

// console.log(Math.floor(4.9));round off to lower end;output:4

// console.log(Math.min(4, 3, 6, 8));find min value

// console.log(Math.max(4, 3, 6, 8));find max value

console.log(Math.random())
// tell random values between 0 to 1

console.log((Math.random()*10) + 1);
// here we are using the same function of math but fixing a range between 1 to 10

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// here we are using a formula and fixing the range between 10&20 this is a general formula 
// Math.random() * (max - min + 1)) + min; IMP formula