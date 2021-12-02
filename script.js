//click button, login
const message = document.getElementById("message");

const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", login);
//register handler "newUser" for "newUser" button
const btnNewUser = document.getElementById("newUser");
btnNewUser.addEventListener("click", newUser);

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginResult = document.getElementById("loginResult");

  const pwd = localStorage.getItem(username);

  if (
    (username == "janne" && password == "test") ||
    (pwd != null && pwd == password)
  ) {
    let upperName = username.toUpperCase();
    loginResult.textContent = `Welcome ${upperName}! You are logged in now! `;
    const logoutBtn = document.createElement("button");
    logoutBtn.innerText = "LOGOUT";
    loginResult.append(logoutBtn);
    document.getElementById("unLogin").style.display = "none";
    document.getElementById("loginResult").style.display = "flex";
    document.getElementById("loginResult").style.flexDirection = "column";
    const removeSelector = document.querySelector("section");
    removeSelector.remove();
    document.querySelector("header").style.height = "450px";
    document.querySelector("button").style.marginTop = "100px";
  } else {
    loginResult.textContent = "Login failed, please try again.";
  }
}

//clear button
const btnClear = document.getElementById("btnClear");
const inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});

// change "LOGIN" to "REGISTER NEW USER"
function newUser() {
  // change h2 text to "register..."
  message.innerText = "Register New User";
  // change btnSubmit handler to addUser

  // remove "New User" button
  // change text "LOGIN" to "REGISTER"
}

//Register new user
function addUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  localStorage.setItem(username, password);
  // display message
  // change h2 text back to login

  // change btnSubmit handler back to login

  // add "New User" button back
  // change text "REGISTER" back to "LOGIN"
}
