const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage :function () {
        // welcomeMessage :function () { here we write in this way because we are inside an object 
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        // this: used when we have to copy the latest contex
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// here we cant use 'this' it is only for use in object, output will be undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// this is arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// if we will not initiate any vakue it will give empty value and if assisgned it will give undefined

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})
// const addTwo = (num1, num2) => ({username: "hitesh"}) this is SYNTAX of implicit arrow function

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()