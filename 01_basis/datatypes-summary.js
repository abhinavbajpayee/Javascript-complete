//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol(used to make a value unique), BigInt(used when it is abolut scientific values or very big values)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
// here we have to use n at last


// Reference (Non primitive)
// these data type work on call by reference;i.e these are the onces when we call them we get thier location rather than value
// Array, Objects, Functions
// JS is dynamically typed as in this variable type is defined at runtime not compile time
// let A="hero" ; this will make var A as string automatically even though we have not defined it before
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// for all non-primitive datatypes we get result as funtion but for function we get as object

/*//primitive typeof values : 
// Number => number
// String => string
// Boolean => boolean
// null => object
// Undefined => undefined
// Symbol => symbol
// BigInt => bigint

//for non prem 
// array => object.
// object => object.
// function => function. // said as : (function object)*/
// https://262.ecma-international.org/5.1/#sec-11.4.3