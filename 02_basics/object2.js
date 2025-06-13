// const tinderUser = new Object();Singleton object

const tinderUser = {}
// not a Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullName: {
            firstName: "hitesh",
            lastName: "choudhary"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4);assign:takes all enumerable objects and merge them into target

const obj3 = {...obj1, ...obj2}
// this is a standard way to concat objects using spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));here Object.keys is used to take keys of the target object 
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))
// here output is in array:[ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));Checking whether particular property is present or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
