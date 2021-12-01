const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", login());

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginSuccess = document.getElementById("loginSuccess");
  const loginFail = document.getElementById("loginFail");
  if (username == "janne" && password == "test") {
    loginSuccess.textContent = "Welcome!! Your name is" + username;
    console.log("ログインできました");
  } else {
    loginFail.textContent = "Login fail, please try again.";
    console.log("ログインできませんでした");
  }
}

//test
button.addEventListener("click", onClickBtn());

function onClickBtn() {
  console.log("ボタンがクリックされました。");
  console.log(username.value);
}

//Save to local storage
localStorage.setItem("username", username.value);
localStorage.setItem("password", password.value);
