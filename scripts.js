 /* Add your JavaScript to this file */
window.onload=function(){
  var Subbutton=document.getElementByTagName("button")[0];
  Subbutton.addEventListener("click",SubbuttonMsg);
  
  function SubbuttonMsg() {
    if (document.getElementById("email").innerHTML.length == 0) {
        var message = document.getElementsByClassName('message')[0];
        message.innerHTML += "Please enter a valid email address";}
    else {
        var message = document.getElementsByClassName('message')[0];
        var newemail =document.getElementById("email").innerHTML;
        message.innerHTML += "Thank you! Your email address ${newemail} has been added to our mailing list!";
    }
  }
}
