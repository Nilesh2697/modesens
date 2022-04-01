document.querySelector("form").addEventListener("submit",signUpfun)

    var userData=JSON.parse(localStorage.getItem("userCreds"))||[];
    function signUpfun(){
        event.preventDefault();

        var  userObj={
            email:document.querySelector("#email").value,
            pass:document.querySelector("#pass").value,
            user:document.querySelector("#user").value,
        };
        // console.log(userObj);
        userData.push(userObj);
        // console.log(userData)
        localStorage.setItem("userCreds",JSON.stringify(userData))
        window.location.href="login.html"
    }