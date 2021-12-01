//click button, login
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", login());

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginSuccess = document.getElementById("loginSuccess");
  const loginFail = document.getElementById("loginFail");
  if (username == "janne" && password == "test") {
    loginSuccess.textContent = `Welcome ${username} !!  ${username} are login now!! `;
  } else {
    loginFail.textContent = "Login fail, please try again.";
  }
}

//clear button
const btnClear = document.querySelector("button")[0];
const inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});

//Save to local storage
localStorage.setItem("username", username.value);
localStorage.setItem("password", password.value);
