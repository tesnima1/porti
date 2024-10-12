// var myobject={
//     firstname:"abuki",
//     lastname:"oumer",
//     age:20,
//     fullname:function(){
//       return  this.firstname + " " + this.lastname;

//     }
// }
// document.write(myobject.fullname())

// var car={
//     brand:"toyota",
//     model:2024,
//     color:"black",
//     made:"japan",
//     start:function(){
//         return `the brand of my car is ${this.brand} and the color is ${this.color}`;
//     }
// }
// document.write(car.start())
// var myobject={
//     firstname:"tesnim",
//     lastname:"muhaba",
//     age:16,
//     fullname:function(){
//         return this.firstname+" "+ this.lastname +"<br>"+this.age ;

//     }
// }
// document.write(myobject.fullname())

function person(first,last,age,city){
    this.firstname=first;
    this.lastname=last;
    this.age=age;
    this.city=city;


}
 var person1=new person("hayat","tes" ,12,"addisababa");
 var person2=new person("tesnim","mek",30,"adama");
 document.write(person1.age);
 console.log(person1.lastname);