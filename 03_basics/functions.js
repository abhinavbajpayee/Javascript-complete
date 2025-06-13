
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
// this is declaration function sayMyName

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// this can be run by, addTwoNumbers(3, 5),Output:8
// this will create a problem when addTwoNumbers(3, "a")

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        // !username=not undefined=true
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
// when we dont use assign any value return is not NULL rather it is undefined

function calculateCartPrice(val1, val2, ...num1){
    // val1, val2, ...num1 this is use of Rest operator,used when unlimited parameters are present
    // this can also be written as, function calculateCartPrice(...num1)
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// here function handleObject(anyobject){ can be used at multiple places
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// this is the same thing done as above just this is the case of array

console.log(returnSecondValue([200, 400, 500, 1000]));