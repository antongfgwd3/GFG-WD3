const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");
const contactInput = document.querySelector("#contact");

const addBtn = document.querySelector("#addBtn");
const tbody = document.querySelector("tbody");

let users = [];

let updateIndex = "";

//event listener
addBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    !nameInput.value ||
    !emailInput.value ||
    !ageInput.value ||
    !contactInput.value
  ) {
    alert("Please enter all the values");
    return;
  }
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    age: ageInput.value,
    contact: contactInput.value,
  };

  if (this.innerHTML == "Add Info") {
    users.push(user);
  } else {
    users = users.map((value, index) => {
      if (index == updateIndex) {
        return user;
      }
      return value;
    });
  }

  updateTable();

  addBtn.innerText = "Add Info";
});

function renderData() {
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const email = document.createElement("td");
    const age = document.createElement("td");
    const contact = document.createElement("td");
    const deleteBtn = document.createElement("button");
    const updateBtn = document.createElement("button");

    const div = document.createElement("div");

    div.appendChild(updateBtn);
    div.appendChild(deleteBtn);

    deleteBtn.innerText = "Delete";
    updateBtn.innerText = "Update";

    deleteBtn.addEventListener("click", () => {
      removeUser(index);
    });

    updateBtn.addEventListener("click", () => {
      nameInput.value = user.name;
      emailInput.value = user.email;
      ageInput.value = user.age;
      contactInput.value = user.contact;
      addBtn.innerText = "Update Info";
      updateIndex = index;
    });

    //assigning the values for td
    name.innerText = user.name;
    email.innerText = user.email;
    age.innerText = user.age;
    contact.innerText = user.contact;

    //appending all the datas to the tr
    row.append(name);
    row.append(email);
    row.append(age);
    row.append(contact);
    row.append(div);

    //appending the tr to tbody
    tbody.append(row);
  });
}

function removeUser(id) {
  const newUsers = users.filter((value, index) => {
    return index != id;
  });

  users = [...newUsers];

  updateTable();
}

function updateTable() {
  resetInputs();
  tbody.innerHTML = "";
  renderData();
}

function resetInputs() {
  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
  contactInput.value = "";
}
