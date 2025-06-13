// SYNTAX: let anyName = datatype to be converted in(function)
let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); this is for power **
// console.log(2/3);
// console.log(2%3); here we get remainder

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 
// this is concatnation let str3 = str1 + str2 
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// these bopth will give same result; console.log(1 + "2");console.log("1" + 2);
// console.log("1" + 2 + 2); here we will see that output is 122 
// console.log(1 + 2 + "2"); here we see that output is 32 because if string lies in first then the whole nbracket will be treated as a string only
// console.log(1 + 2 + "2");
// console.log(1 + 2 + 5+ "5"+7);here we find that the output is 857 
// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");
// operator precedence
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion