// foreach loop: callbackfn: (value: string, index: number, array: string[]) => void
// foreach loop do not rreturn any value

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
// function (val): we here have not written name as name is not written in call back function
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // over here we have only used arrow func in place of function
    console.log(item.languageName);
} )
