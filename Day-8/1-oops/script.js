let user = {
  name: "Jake",
  age: 27,
  email: "jake@gmail.com",
};

// class User {
//   constructor(name, a, email) {
//     this.name = name;
//     this.age = a;
//     this.email = email;
//   }

//   print() {
//     console.log(`${this.name} is of age ${this.age}`);
//   }
// }

// const user1 = new User("Jason", 26, "jason@gmail.com");
// const user2 = new User("Ben", 13, "ben@gmail.com");
// console.log(user1);
// user1.print();
// user2.print();

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  //   this.print = function () {
  //     console.log(`${this.name} is of age ${this.age}`);
  //   };
}

User.prototype.print = function () {
  console.log(`${this.name} is of age ${this.age}`);
};

const user1 = new User("Jason", 26, "jason@gmail.com");
const user2 = new User("Ben", 13, "ben@gmail.com");
console.log(user1);
user1.print();
user2.print();

let user3 = {
  name: "Kevin",
  age: 34,
  print: function () {
    console.log(`${this.name} is of age ${this.age}`);
  },
};

user3.print();
