document.querySelector("#otpForm").addEventListener("submit",paymentDetails);

function paymentDetails()
{
   event.preventDefault();
    var form=document.querySelector("#otpForm");
    var otp=form.otp.value;
    console.log(otp)
    if(otp=='123')
    {
        alert("payment successful") ;
        window.location.href="success.html"
    }
    else{
    alert("Invailed OTP Number")
    }
}