 /* Add your JavaScript to this file */
window.onload=function(){
 document.addEventListener('DOMContentLoaded', function() {
    var press = document.getElementsByClassName("btn");
    var message = document.getElementsByClassName("message");
   

    button.onclick = function(clicked) {
        address = document.querySelector("input").value;
        if(address.includes("@") && address.includes(".")) {
            message[0].innerHTML = "Please enter a valid email address.";
       
        } else {
            message[0].innerHTML = "Thank you! Your email address " + " " + address+ " " + " has been added to our mailing list!";
   
        }
    };
})

