// +++++++++++++++++++++++++++++++++
// Stack(Primitive) Heap(Non-primitive)

// this was the case of Primitive datatype
let myYoutubeName="abhinav vlogs"
let anotherName=myYoutubeName
anotherName="mummyvlogs"
/*console.log(anotherName);
console.log(myYoutubeName);'
here we find that answer of both of these is differnt 
as the value gets sotred in heap which only porvides a
copy and the change is also done in copy not in actual data*/


// case of Non-Primitive datatype
let userOne={
    email:"user1@google.com",
    upi:"111"
}

let userTwo=userOne

userTwo.email="user2@google.com"

console.log(userOne.email);
console.log(userTwo.email);

/*Here the storage is in Heap by which we get the original 
loc thus changes happen in original data and thus the output is also same
which is user2@google.com */