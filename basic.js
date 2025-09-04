// function greet(user){
// console.log("hello "+user.gender+user.name+" your age is "+user.age)
// }
// let user = {
//     name: "John",
//     gender: "other",
//     age: 3
// }
// greet(user)

// if (user.age > 18) {
//     console.log("You can vote");
// }
// else {
//     console.log("You cannot vote");
// }


// function check(arr){
//  for(let user of arr){
//  if(user.age>18 && user.gender==="male"){
//     console.log(user.name+" can vote "+user.age+" "+user.gender)
//  }
// }
// }
// const users=[{
//         name: "John",
//         gender: "other",
//         age: 3
// },{
//         name: "Jane",
//         gender: "female",
//         age: 25
//     },{
//         name: "Doe",
//         gender: "male",
//         age: 40
//     }
// ]
// check(users)




// const users = [
//     { name: "John", gender: "other", age: 3 },
//     { name: "Jane", gender: "female", age: 25 },
//     { name: "Doe", gender: "male", age: 40 }
// ];

// const eligibleUsers = users.filter(user => user.age > 18 && user.gender === "male");
// eligibleUsers.forEach(user => {
//     console.log(eligibleUsers);
// });


// function sum (a,b){
//     return a+b;
// }
// let ans= sum(2,3);
// console.log(ans);


// function sum (n){
//     let total = 0;
//     for(let i=0;i<=n;i++){
//         total += i;
//     }
//     return total;
// }
// console.log(sum(5));

// Synchronus 
// const fs= require('fs');
// const data= fs.readFileSync('a.txt','utf-8') 
// console.log(data);
// const data1= fs.readFileSync('b.txt','utf-8');
// console.log(data1);

// asnchronously 
// const fs= require("fs");
//  function print(err,data){
//     console.log(data);
//  }
//  fs.readFile("a.txt","utf-8",print)
//  fs.readFile("b.txt","utf-8",print)
//  console.log("done");
