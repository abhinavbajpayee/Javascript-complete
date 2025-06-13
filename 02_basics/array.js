// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);used to get data at a particular point

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop();deletes last element

// myArr.unshift(9);insert value at start of the array;worsens the complexity
// myArr.shift();deletes first element

// console.log(myArr.includes(9));tell whether it is avaliable or not output is in boolean form
// console.log(myArr.indexOf(3));if element is not present answer is -1 

// const newArr = myArr.join();add all araay element to a string only changre datatype thus we can use properties of new datatype

// console.log(myArr);
// console.log( newArr);


// slice,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);
// slice:prints array for a range;Does not modiy original array

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
// slice:prints array for a range;Do modiy original array