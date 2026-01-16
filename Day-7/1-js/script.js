// String;
// Number;
// Boolean;
// Array;
// Object;

// var, let and const

// var - global scoped
// let and const - block scoped

// var a = 10;

// console.log("var: Outside block", a);

// if (a > 5) {
//   var a = 20; // a = 20
//   console.log("var: Inside block", a);
// }

// console.log("var: After block", a);

// let a = 10;

// console.log("let: Outside block", a);

// if (a > 5) {
//   let a = 20;
//   console.log("let: Inside block", a);
// }

// console.log("let: After block", a);

// const x = 10;
// console.log(x);
// x = 20;
// console.log(x);

// hoisting
// console.log(a);
// let a;

//temporal dead zone

// let search = null;

// let results = ["search", "serach tube", "sear"];

// if (search.length === 0) {
//   console.log("print nothing");
// } else {
//   console.log("print a box");
// }

// function greet() {
//   console.log("Hello");
// }

// greet();

// function add(num1, num2) {
//   return num1 + num2;
// }

// let result = add(34, 56);
// console.log(result);

//function expression - arrow function
// const add = (num1, num2) => {
//   return num1 + num2;
// };

// let result = add(34, 56);
// console.log(result);

// hello();

// function hello() {
//   console.log(arguments);
// }

// var hello = function () {
//   console.log(arguments);
// };

// hello(1, 2, 3, 4, 5);

//IIFE = immediately invoked function expression
// (function () {
//   console.log("Print now");
// })();

// let arr = [1, 2, 3, "Grapes", "Mango", true, false, [1, 2, 3, 4, 50]];

// console.log(arr[7][4]);

// const person = {
//   name: "Kevin",
//   age: 29,
//   required: true,
//   sports: ["Football", "Basketball"],
//   father: {
//     name: "Jacob",
//     age: 54,
//     email: "jacob@gmail.com",
//     occupation: {
//       company: {
//         name: "Dell",
//       },
//     },
//   },
// };

// let prop = "father";
// let prop1 = "email";

// console.log(person.sports);

// console.log(`person${prop}`);

// for(intializer; condition; updater){}

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let x = 0;

// while (x < 10) {
//   console.log(x);
//   x++;
// }

// do {
//   console.log(x);
//   x++;
// } while (x < 10);

const arr = ["Grapes", "Mango"];

for (let i = 0; i < arr[0].length; i++) {
  console.log(arr[i]);
  console.log(arr[0][i]);
}
