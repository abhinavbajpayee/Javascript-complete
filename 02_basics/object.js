// singleton:jab constructor se banega tb hamesha singleton hoga literals se singleton nhi hoga

// Object.create:this is constructor method

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // name,"full name ":both are string type only
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email);it is also possible but next one is generally preffered
// console.log(JsUser["email"]);this is standard way
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser); freeze:this will lock values and will not bring any change
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    // this is only used to know more keys of object otherwise implementation without the same is possible
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());