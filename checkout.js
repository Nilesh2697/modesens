document.querySelector("#signupForm").addEventListener("submit",paymentDetails);

function paymentDetails(event)
{
   event.preventDefault();
    var form=document.querySelector("#signupForm");
    var name=form.name.value;
    var cardNumber=form.accNum.value;
    var number=form.phone.value;
    var cvv=form.password.value;
    console.log(name,cardNumber)
    if(cardNumber.length==10)
    {
        window.location.href="otp.html"
    }
    else{
    alert("Invailed Card Number")
    }
}