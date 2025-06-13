const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
// it is not that upper one is not correct but lower one is better
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// thi is a way to declare string
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);addressing prototype


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));
// console.log(gameName.indexOf('t')); this cannot be written as console.log(gameName.indexOf(t));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
// this is same as substring but we can also use here -ve values which start it from reverse

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
// remove spacing

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))
// this will tell in boolean form whether a word is present or not

console.log(gameName.split('-'));
// this is something used to convert string to array and seperation is on basis of -