// Dates
// calculated from January 1,1970,UTC

let myDate = new Date()
console.log(myDate.toString());
// Fri Jun 13 2025 13:16:05 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());
// Fri Jun 13 2025

console.log(myDate.toLocaleString());
// 6/13/2025, 1:16:05 PM

// console.log(typeof myDate);type:object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);5,3is hours and minutes respectively
// let myCreatedDate = new Date("2023-01-14")

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));coversion in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
// in this method we declare an object; 'default':Timezonec