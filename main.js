var currentIndex=1;
displayslides(currentIndex);

function setslides(num){
    displayslides(currentIndex+=num);
}

function displayslides(num){
var x;
var slides=document.getElementsByClassName("images");
if(num>slides.length){
    currentIndex=1
}
if(num<1){
    currentIndex=slides.length
}
for(x=0; x<slides.length; x++){
    slides[x].style.display="none";
}
slides[currentIndex-1].style.display="block";
}


function validateform() {
    var newPassword = document.getElementById('pass').value;
    
    var regularExpression  = /^[0-9!@#$%^&*]/;
  
    
    if(!regularExpression.test(newPassword) ){
        alert("password should contain numbers and special characters and should not contain letters");
        return false;
    }

    var newName1 = document.getElementById('fname').value;
    
    var regularExpression  = /^[a-zA-Z]/;
  
    
    if(!regularExpression.test(newName1) ){
        alert(" Only letters no special characters or numbers in your name ");
        return false;
    }

    var newName2 = document.getElementById('lname').value;
    
    var regularExpression  = /^[a-zA-Z]/;
  
    
    if(!regularExpression.test(newName2) ){
        alert(" Only letters no special characters or numbers in your name");
        return false;
    }



    if (!document.myform.opt1.checked && !document.myform.opt2.checked && !document.myform.opt3.checked ) 
     {
        alert ("please check a checkbox at least one")
        return false;

       } 
        
       }
     