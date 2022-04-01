var registeredUser = JSON.parse(localStorage.getItem("userCreds"));
console.log(registeredUser);

document.querySelector("form").addEventListener("submit", loginfun);

function loginfun() {
  enterEmail = document.querySelector("#email").value;
  enterPass = document.querySelector("#pass").value;

  for (var i = 0; i < registeredUser.length; i++) {
    if (
      registeredUser[i].email == enterEmail &&
      registeredUser[i].pass == enterPass
    ) {
      alert("login Success");
      // window.location.href="cart.html"
      break;
    } else {
      console.log("Login Fail");
      window.location.href="men.html"
    }
  }
}
