// let chebtn=document.getElementById("cb");
// let ytlink=document.getElementById("ytlink");
// ytlink.addEventListener("click",function(t){
//   if (!chebtn.checked){
// t.preventDefault();
// }
// })
let first=document.querySelector(".first");
let second=document.querySelector(".second");
let third=document.querySelector(".third");
 
first.addEventListener("click", function(t){
  // e.sropPropagation();
  console.log("hi the first block");},{capture:true}
)
second.addEventListener("click", function(t){
  console.log("hi the second block");
  
},{capture:true}
);
third.addEventListener("click", function(t){
  console.log("hi the third block");
  
},{capture:true}
);

document.addEventListener("click", function(t){
  // e.sropPropagation();
  console.log("hi the document block");
  
},{capture:true}
);




