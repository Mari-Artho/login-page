// check existing session
const username = localStorage.getItem("loggedInUser");

//clear button
const btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", clear);
const btnSubmit = document.getElementById("btnSubmit");
const buttons = document.getElementById("buttons");
const message = document.getElementById("message");
const loginResult = document.getElementById("loginResult");
const btnNewUser = document.getElementById("newUser");

if (username != null) {
  setLoggedInScreen(username);
} else {
  //click button, login

  btnSubmit.addEventListener("click", login);
  //register handler "newUser" for "newUser" button
  btnNewUser.addEventListener("click", newUser);
}

function setLoggedInScreen(username) {
  // remember session
  localStorage.setItem("loggedInUser", username);
  let upperName = username.toUpperCase();
  loginResult.textContent = `Welcome ${upperName}! You are logged in now! `;
  //create logout button.
  const logoutBtn = document.createElement("button");
  logoutBtn.innerText = "LOGOUT";
  loginResult.append(logoutBtn);
  //add id name to logout btn.
  logoutBtn.setAttribute("id", "logout");

  //hide login message and display colmun
  document.getElementById("loginResult").style.display = "flex";
  document.getElementById("loginResult").style.flexDirection = "column";
  //hide section(login) area.
  document.querySelector("section").style.display = "none";
  //decoration css
  document.querySelector("header").style.height = "450px";
  logoutBtn.style.marginTop = "70px";
  //click button, logout
  const btnLogout = document.getElementById("logout");
  btnLogout.addEventListener("click", logout);
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginResult = document.getElementById("loginResult");

  const pwd = localStorage.getItem(username);

  if (
    (username == "janne" && password == "test") ||
    (pwd != null && pwd == password)
  ) {
    setLoggedInScreen(username);
  } else {
    loginResult.textContent = "Login failed, please try again.";
    clear();
  }
}

function logout() {
  document.querySelector("header").style.height = "200px";
  document.querySelector("section").style.display = "block";
  document.querySelector("section").style.height = "300px";
  //hide logout button.
  document.getElementById("logout").style.display = "none";
  loginResult.textContent = "You are logged out. Please login.";
  //display flex column css.
  document.querySelector("section").style.display = "flex";
  document.querySelector("section").style.flexDirection = "column";
  clear();
  // remove session info
  localStorage.removeItem("loggedInUser");
}

function clear() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
}

// change "LOGIN" to "REGISTER NEW USER"
function newUser() {
  message.innerText = "Register New User";
  //change message
  loginResult.innerText = "Please register!";

  /// change "New User" button to "Back"
  btnNewUser.innerText = "Back";
  btnNewUser.removeEventListener("click", newUser);
  btnNewUser.addEventListener("click", resetNewUserButton);

  // change text "LOGIN" to "REGISTER"
  btnSubmit.innerText = "REGISTER";

  // change btnSubmit handler to addUser
  btnSubmit.removeEventListener("click", login);
  btnSubmit.addEventListener("click", addUser);
  clear();
}

function resetNewUserButton() {
  // add "New User" button back
  btnNewUser.innerText = "New User";
  btnNewUser.removeEventListener("click", resetNewUserButton);
  btnNewUser.addEventListener("click", newUser);

  // change text "REGISTER" back to "LOGIN"
  message.innerText = "LOGIN";

  btnSubmit.innerText = "LOGIN";
  // change button handler back to login
  btnSubmit.removeEventListener("click", addUser);
  btnSubmit.addEventListener("click", login);
}

//Register new user
function addUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (localStorage.getItem(username) != null) {
    loginResult.innerText = "Sorry, this user is already registered";
    /// change loginResult to "Registration failed"
  } else {
    // user is new
    localStorage.setItem(username, password);
    loginResult.innerText = "You are now registered. Please log in.";
    clear();
  }
}
