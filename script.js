function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username == "janne" && password == "test") {
    //alert("Welcome!");
    //return false;
    let welcome = document.querySelector("header");
    welcome.innerText = "Welcome!!";
  } else {
    alert("Your are login fail, please try again.");
  }
}
