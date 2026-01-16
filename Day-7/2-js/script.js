// copy by value vs copy by reference
// let a = 10;
// b = a;
// a = 20;

// console.log(a);
// console.log(b);

// const a = [1, 2, 3, 4, 5];
// b = a;

// a.push(6);
// b.push(7);
// console.log(a);
// console.log(b);

// const school = {
//   name: "St. peters",
//   address: "10th BLock, X Cross Street, HSR Layout",
// };

// const stu1 = {
//   name: "Kevin",
//   age: 12,
//   stars: 5,
// };

// const stu2 = {
//   name: "Jenny",
//   age: 13,
// };

// const newStu2 = {
//   ...school,
//   ...stu1,
//   schoolName: school.name,
//   stars: stu1.stars + 1,
// };

// console.log(newStu2);

const person = {
  name: "Kevin",
  age: 29,
  required: true,
  sports: ["Football", "Basketball"],
  father: {
    name: "Jacob",
    age: 54,
    email: "jacob@gmail.com",
    occupation: {
      company: {
        name: "Dell",
      },
    },
  },
};

//js destructuring

// let {
//   father: {
//     occupation: {
//       company: { name: fatherCompanyName },
//     },
//   },
// } = person;

// fatherCompanyName = "Wipro";

// console.log(person);

const arr = [1, 2, 3, 4, 5];

arr.splice(1, 3);

console.log(arr);
