// Primitive 

// 7 types : String, Numberm Boolearn, null, undefined, Symbol, BigInt

// const score = 100 
// const scoreValue = 100.3 

// const isLoggedIn = false
// const outsideTemp = null 
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456535766585

// Reference (Non Primitive)

// Array, Objects, Functions 

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//    name: "hitesh",
//    age : 22, 

// }
// const myFunction = function(){
//    console.log("Hello WOrld");
// } 

// console.log(typeof bigNumber);

// console.log(typeof anotherId);

// **************************

// Stack (Primitive), Heap (Non-Prinitive)

let myYoutubename = "hiteshchuduri@gmail.com"

let anothername = myYoutubename 
anothername = "chaiaurcode"


console.log(anothername);
console.log(anothername);

let user = {
   email: "user@google.com",
   upi: "user@bl"
}

let userTwo = userOne 

userTwo.email = "hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);