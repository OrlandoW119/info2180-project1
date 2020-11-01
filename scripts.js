/* Add your JavaScript to this file */
window.onload=function(){
function addEmail(formData){
   let new=formData.email.value;
   var messageElement=document=document.querySelector('.message');
   if(new){
      messageElement.innerHTML=' Thank you! Your email <${new}> has been addded to your mailing list';
      return false;
   }else{
       messageElement.innerHTML="Please enter a valid email";
       return true;
   }
}
}