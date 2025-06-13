const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);merging two array will thogugh combine but it will show that two arrays are there  
// console.log(marvel_heros[3][1]);thoguh it will give 1 value of second array but not a good syntax

// const allHeros = marvel_heros.concat(dc_heros);concat function will merge both arrays
// console.log(allHeros);merge in proper way

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
// ... is actually spread operator

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// flat:return all elements of sub array into main array

console.log(Array.isArray("Hitesh"))
// checking whethere above is array or not

console.log(Array.from("Hitesh"))
// converts to array

console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
// .of:returns new array from the existing elements