
// function myvar(){
//    var a = 10;
//    if(true) {
//       var a = 20;
//       console.log(a + "\n");
//    }
//    console.log(a + "\n");
// }

// myvar(); 

// function mylet(){
//    let a = 70;
//    if(true) {
//       let a = 90;
//       console.log(a + "\n");
//    }
//    console.log(a + "\n"); 
// }

// mylet(); 

// const secondsInminit = 60;

// secondsInminit = 30; // On time user

// console.log(secondsInminit);


// var language = 'javascript';

// if (true) {
//    const age = 25; /// block scope
// }
// console.log(age); 

// const name = 30;

// Hoisting

// console.log(greeting);
// let greeting = 'Hello';

// undefined

// const num = 40;

// // num = 30; // Not changing valu

// console.log(num);

const accountId = 144455
let accountEmail = "info@gmail.com"
var accountPassword = "123456"
accountCity = "Dhaka"
let accountState;

// accountId = 2 not allowed
accountEmail = "hc@hc.com"  
accountPassword = "212121"
accountCity = "Bangladesh" 
console.log(accountId);
/*
Prefer not to use var 
because of issue in block scop and functional scope
*/
console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);
