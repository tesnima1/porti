// interaptive madreg; browserachn ke clintu gar endiyawera madreg new



//single selector


let eli =document.getElementById("two");
// console.log(eli);
console.log(eli.textContent);

eli.textContent="hello!";
console.log(eli);

let el2 = document.querySelector("button");
console.log(el2);
let bb = document.querySelector("check");
console.log(bb);
// let cc = document.querySelector('ul.yellow');
// console.log(cc);
// const ul = document.querySelector('#fruit');
// const li = ul.querySelector('fruit.blue');
// cosole.log(ul);
// let  ss=documentdocument.getElementById("list");
// 
// const parentList = document.querySelector('#parentList');
// const childList = parentList.querySelector('ul.childList');
// consol.log(fc);
// consol.log(ic);

let el1=document.getElementById("four");
let parent=el1.parentNode;
console.log(parent);
let el10=el1.nextElementSibling;
console.log(el10);
let az=el1.previousElementSibling;
console.log(az);
let a=document.createElement("li");
console.log(a);
a.textContent="banana";
let ul=document.getElementById("list");
ul.prepend(a);
a.style.backgroundColor="pink";
a.style.padding="12px";

// let el3 = document.querySelectorAll("p");
let el3 = document.querySelectorAll(".A");

// console.log(el3);
// let el4 = document.getElementsByClassName("A");
// console.log(el4);
// let el5 = document.getElementsByTagName("button");
// console.log(el5);

// // let el6 =document.("two");

// el6.classname="pink";
// el6.innerHTML="new apple";
// el6.classlist.add("aa");
// console.log(el6);

// el7[0].className = "pink";
// console.log(el7);
// let el7 = document.getElementsByTagName("li");
// console.log(el8);
// el7[1].className="pink";
// for(i=0; i<el7.length; i++){
//     let selected=el7[i];
//     selected.className="pink";
// }
// console.log(el7)