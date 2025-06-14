// reduce method
const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,curVal){
//     return acc,curVal
// },0)
// console.log(myTotal);

// Doing same using arrow function
const myTotal=myNums.reduce((acc,curVal)=>acc+curVal,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
      itemName:"py course",
        price:299
    },
    {
      itemName:"GD course",
        price:999
    },
]
const totalPrize=shoppingCart.reduce((acc,itm)=>acc+itm.prize,0)
console.log(totalPrize);