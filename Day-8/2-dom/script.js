// document.getElementById("title").innerText = "Javascript";

// document.querySelector("h1").innerText = "DOM";
// document.querySelector(".content").innerText = "This is from JS";
// document.querySelector("#content").innerText = "This is DOM";

// const h1 = document.createElement("h1");

// h1.innerText = "Hello world";

const body = document.querySelector("body");

// const result = body.appendChild(h1);

// console.log(result);

const img = document.createElement("img");

img.setAttribute("src", "https://www.w3schools.com/js/pic_htmltree.gif");

img.setAttribute("alt", "lake");

body.append(img);

const fruits = ["Apple", "Mango", "Orange", "Grape"];

const div = document.querySelector("div");

fruits.forEach((fruit, idx) => {
  const h1 = document.createElement("h1");

  h1.innerText = `${idx + 1}. ${fruit}`;

  h1.setAttribute("style", "color:red;font-size:12px;color:blue");

  div.appendChild(h1);
});
