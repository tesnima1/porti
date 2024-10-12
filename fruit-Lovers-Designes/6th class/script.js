var o={
    name:"Abebe",
    age:20,
    address:"Addis Ababa",
    rr:function(){
     return `name ${this.name} age:${this.age} address:${this.address}`;
    }
}
console.log(o.name)
console.log(o["address"])
console.log(o.display())




function person(fName,sName,age){
    this.fName=fName;
    this.sName=sName;
    this.age=age
    this.fullName=function(){
        return fName+" "+sName;
    }
}
var p1=new person("abdu","ahmed",40);
console.log(p1.fullName())



function country(population,name,code){
    this.population=population
    this.name=name
    this.code=code
    this.about=function(){
        return `There are ${this.population} people in ${this.name}.The country code is ${this.code} .`
    }

}
var c1=new country(1000000,"Ethiopia","03")
var c1=new country(100000,"Ethiopia","03")

console.log(c1.about());
var oo={
    name:"tes",
    age:16,
    address:{
        street:"123 main st",
        city:"adama",
    }
//    country:{
//    name:"ethiopia",
// code:251
}



let st="hello";

let str1 = [2,4,6,7];
let str2 =[0,9];

let num =124.12345;
let dd = maths.floor(num )

let ln = st.length();
console.log(ln);



var aa = new Date ();
console.log(aa.getDate());
