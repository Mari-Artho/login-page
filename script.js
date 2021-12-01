//click button, login
const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", login);

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginResult = document.getElementById("loginResult");

  if (username == "janne" && password == "test") {
    let upperName = username.toUpperCase();
    loginResult.textContent = `Welcome ${upperName}! ${upperName} is logged in now! `;
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

function saveToStorage(username, password) {
  //Save to local storage
  localStorage.setItem(username, password);
}
