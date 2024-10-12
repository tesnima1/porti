// const formsubmit=document.getElementById("idform");

// formsubmit.addEventListener("submit",(e)=>{
//     let errors=[];
//    const succm=document.getElementById("succm");
//     let fname=document.getElementById("fname").value;
//     // let valuef =fname.value; for selecting the feild 
//     let Lname=document.getElementById("Lname").value;
//     let password=document.getElementById("password").value;
//     // check valdation
//     if(!fname){
//         errors.push ("First name is required!");
//     }
//     if (!Lname){
//         errors.push ( "last name is required!");
//         }
//     if(!password){
//         errors.push ( "password is required!");

//     }
//     else if (password.length<8){
//         errors.push("password length must be greater than 8 characters ");
//     }
//     if(errors.length>0){
//         e.preventDefault();// prevent default error submission
//         edisp.style.display="block";
//         edisp.textcontent="";

//         for (i=0; i<errors.length;i++);
//         edisp.textcontent+=errors[i];

//     }
//     else{
//         e.preventDefault();
//         Succm.style.display="block";
//         succm.textcontent="form submission succesfully submitted.."
//         formsubmit.reset();
//     }
    
// } );
 let ff =document.getElementsByName("")
const formid = document.getElementById("formid");

formid.addEventListener("submit", function(e){
    let errors =[];
    let success=document.getElementById("success");
    let errDisp=document.getElementById("errDisp");
    let fname = document.getElementById("fname").value;
    // let fnameValue = fname.value;
    let lname = document.getElementById("lname").value;
    // let lnameVlaue=lname.value;
    let password = document.getElementById("password").value;
    // let passwordVlaue=password.value;  
    // check validation 
    if(!fname){
        errors.push("first name is required.");
    }
    if(!lname){
        errors.push("last name is required.");
    }
    if(!password){
        errors.push("password is required.");
    }
    else if(password.length<8){
        errors.push("password length must be greater than 8 characters.");
    }
    if(errors.length>0){
        e.preventDefault();
        errDisp.style.display="block";
        errDisp.innerHTML="";
       for(i=0; i<errors.length; i++){
          errDisp.innerHTML+=errors[i]+"<br>";
       }
    }
    else{
         e.preventDefault();
         success.style.display="block";
        success.innerHTML="Form Submission successfully submitted!"
        // formid.reset();
    }

})




//   #check if th first name and password filed are left empty when submit button is clicked
//   #if not empty but passowrd is less than 8 character display a message saying " not lessa than 8 character"
  


// pseudo code 
// declare an array that stores the collection of arrays 
// check whether the first name is value or not 
// the value property 
// if empty add "first name is rewuired"
// use innerHTML on error display id on our html 
// check wether the  number character of the password is less than 8 or not 

// let regForm = document.getElementById("regForm");

// regForm.addEventListener("submit", (e) => {
//     let errors = [];
//     let eDisplay = document.getElementById("eDisplay");
//     let sucMessage=document.getElementById("sucMessage");
//     let fname = document.getElementById("fname").value;
//     let lname = document.getElementById("lname").value;
//     let password = document.getElementById("password").value;
//     // Validation checks

//     if (!fname) {
//         errors.push("First name is required");
//     }
//     if (!lname) {
//         errors.push("Last name is required");
//     }
//     if (!password) {
//         errors.push("Password is required");
//     }
//      else if (password.length < 8) {
//         errors.push("Password must be greater than 8 characters");
//     }

//     if (errors.length > 0) {
//         e.preventDefault();// Prevent default form submission on errors
//         eDisplay.style.display = "block";
//         eDisplay.innerHTML = "";
//                 // Display errors
//         for (let i = 0; i < errors.length; i++) {
//             eDisplay.innerHTML+= errors[i] + "<br>";
//         }
//     } else {
//         e.preventDefault();// Prevent default form submission to display success message
//         sucMessage.style.display="block";
//         sucMessage.innerHTML="Form submitted successfully!"
//         // regForm.reset(); // Clears all input fields
//     }
// });






let inputs = document.querySelectorAll("input");

// Function to check if input is filled
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
            input.style.border = "green 2px solid"; // Light green when filled
        } else {
            input.style.backgroundColor = ""; // Reset background color when empty
        }
    });
});

