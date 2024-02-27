// print functions
// alert("hello javascript");
console.log("hello js");
document.write("Hello world");

var name = "Ray";
let age = 22;
const gender = "Male";

// data types in JavaScript
console.log(name);
console.log(age);
console.log(gender);

// operator
let x = 3;
let y = "3";
console.log(x + y); // sum
console.log(x - y); // minus
console.log(y / x); // quest
console.log(x % y); // reminder
console.log(x * y); // multiplication

// comparison operators
console.log(x == y); // false
console.log(x != y); // true
console.log(x === y); // false
console.log(x !== y); // true
console.log(x > y); // false
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

// // user input
// let number1 = Number(prompt("enter the first number: "));
// let number2 = Number(prompt("enter the second number: "));
// let op = prompt("User Choice: +,-,x,/ :");

// if (op == "+") {
//   document.write(`<h1>sum: ${number1 + number2}</h1>`);
// } else if (op == "-") {
//   document.write(`<h1>Minus: ${number1 - number2}</h1>`);
// } else if (op == "x") {
//   document.write(`<h1>sum: ${number1 * number2}</h1>`);
// } else if (op == "/") {
//   document.write(`<h1>Division: ${number1 / number2}</h1>`);
// }

// Function

// function add() {
//   let number1 = Number(prompt("enter the first number: "));
//   let number2 = Number(prompt("enter the second number: "));
//   let op = prompt("User Choice: +,-,x,/ :");
//   if (op == "+") {
//     alert(number1 + number2);
//   } else if (op == "-") {
//     document.write(`<h1>Minus: ${number1 - number2}</h1>`);
//   } else if (op == "x") {
//     document.write(`<h1>sum: ${number1 * number2}</h1>`);
//   } else if (op == "/") {
//     document.write(`<h1>Division: ${number1 / number2}</h1>`);
//   }
//   const userans = prompt(
//     "do you want to use the calculator again:  yes or no? "
//   );
//   if (userans.toLowerCase() === "yes") {
//     add();
//   }
// }

// add();

// // you have 25 rupees u need 50 rupees
// let user = prompt("Enter the money we have: ");

// if (user >= 50) {
//   alert("You can go to ruby and you have extra money");
// } else if (user == 50) {
//   alert("You can just travel...");
// } else {
//   console.log("u need to borrow money from friends");
// }
// var vs let
// Object

// let person = {
//   Name: "Raj",
//   age: 22,
//   stream: "CSE",
// };

// console.log(person);
// console.log(person.Name); // Raj
// console.log(person["Name"]); // Raj

// let Student = {
//   firstName: "Ray",
//   lastName: "R",
//   stream: "CSE",
//   roll: 566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(Student.fullName()); // Ray R

// function fullname() {
//   console.log(2 + 2);
// }
// fullname();

// Student.firstName = "John";
// console.log(Student.fullName()); // John R

//Array
// create
let cars = ["Audi", "BMW", "Mercedes", "Porsche"];
// index
// console.log(cars[0]); // Audi
// console.log(cars[1]); // BMW
// console.log(cars[0]);

// // length of array
// console.log(cars.length); //3
// cars[0] = "Toyota";
// console.log(cars[0]); // Toyota
// // asyn javascript
// // console.log("Hello World First");
// // setTimeout(() => {
// //   console.log("Hello World Second");
// // }, 3000);

// // console.log("hello world 3");
// // push
// // adding
// cars.push("Volvo");
// console.log(cars); // [ 'Toyota', 'BMW', '
// // pop
// cars.pop();
// console.log(cars); // ['Toyota', 'Volvo']
// // delete
// // delete cars[1];
// // console.log(cars); //['Toyota','Volvo']
// // slice
// console.log(cars.slice(0, 3)); // Volvo
// cars[0] = "Nano";
// //CRUD -> Create, Read, Update, delete
// search
// let j = 0;
// let i = 0;

// for (j in cars) {
//   if (cars[j] === "BMW") {
//     console.log("index :" + i);
//   }
//   i += 1;
// }
