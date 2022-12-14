document.body.onload = start();

async function start() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
        const data = await response.json();
        data.forEach(user => addUser(user));
    }
}

function addUser(user) {
    const usersList = document.getElementById("usersList");

    const div = document.createElement("div");
    const id = document.createElement("span");
    const lblName = document.createElement("label");
    const lblEmail = document.createElement("label");
    const txtName = document.createElement("input");
    const txtEmail = document.createElement("input");
    const btnOther = document.createElement("button");
    const btnUpdate = document.createElement("button");
    const btnDelete = document.createElement("button");
    
    id.textContent = `ID: ${user.id}`;
    lblName.textContent = "Name: ";
    lblEmail.textContent = "Email: ";
    txtName.type = "text";
    txtEmail.type = "text";
    txtName.value = user.name;
    txtEmail.value = user.email;
    btnOther.textContent = "Other Data";
    btnUpdate.textContent = "Update";
    btnDelete.textContent = "Delete";

    div.append(id, lblName, txtName, lblEmail, txtEmail, btnOther, btnUpdate, btnDelete);
    usersList.append(div);
}