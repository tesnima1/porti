// built js elements

// var mycar={
//     name:"Ferrari",
//     brand:"toyota",
//     color:"black",
//     model:"2020",
//     condition:"new",
//     brandname:function(){
//         return `the name of my car is ${this.name} and brand is ${this.brand}`;
//     }
// };
// console.log(mycar.name)
// console.log(mycar["brand"])
// console.log(mycar.brandname())











// var hisname={
//     fname:"abebe",
//     lname:"kebede",
//     age:50,
//     fullname:function(){
//         return `his full name is ${this.fname} ${this.lname}`;
//     }
// }
// console.log(hisname.fullname())







// function person(Fname,Lname,age){
//     this.firstname=Fname;
//     this.lastname=Lname;
//     this.myage=age;
//     this.fullname=function(){
//         return this.firstname+""+this.lastname;
//     }
// }
// var person1=new person("Abebe","Kebede",30);
// var person2=new person("Abdu","Ahmed",20);
// console.log(person1.fullname());
// console.log(person2.firstname)



// function car(name,brand,date){
//     this.carname=name;
//     this.carbrand=brand;
//     this.date=date;
//     this.aboutcar=function(){
//         return name+" "+brand+" "+date
//     }
// }
// var car1=new car("bmw","toyota","2022")
// console.log(car1.aboutcar())

function car(name,brand,date){
    // this.carname=name;
    // this.carbrand=brand;
    // this.date=date;
    this.aboutcar=function(){
        return `the name of the car is ${name} the brand is ${brand} and the date is ${date}`
    }
}
var car1=new car("bmw","toyota","2022")
console.log(car1.aboutcar())


