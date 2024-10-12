// console.log("connected");
// conditional statments 1. evaluate 2. decision 3. egradeecute
// 1. if 2. switch 3. ternary
// syntax 
// if(cond){
//     stat
// }



// let a = 5
// if(a>10){
//     alert(a+"greater than 10");
// }
// else if(a<10){
//     alert(a+"less than 10");
// }
// else{
//     alert(a+"equal to 10")
// }






// let x = 5;
// let y;
// x>5? (y="hello"):y=("nop");
// console.log(y)










let day = 3;
switch(day){
    case 1:
        console.log("The day is Monday");
        break;
    case 2:
        console.log("The day is Tuesday");
        break;
    case 3:
        console.log("The day is Wednesday");
        break;
    case 4:
        console.log("The day is Thursday");
    default:
        console.log("Please enter to number between w and 4");   
}





// condition g<0 grade can't be below 0;
// condition 1 grade below 40=f;
// condition 2 grade below 60=c
// condition 2 grade below 75=b
// condition 4 grade below 85=A-
// condition 5 grade above 85=A
// condition 6 grade = 100=A+
// grade >100 grade can't be above 100

let grade=67
if(grade<0){
    console.log("grade can't be less than 0")
}
else if(grade<=40){
   console.log("F")
}
else if(grade<=60){
   console.log("C")
}
else if(grade<=75){
   console.log("B")
}
else if(grade<=85){
   console.log("A-")
}
else if(grade>85){
   console.log("A")
}else if(grade=100){
   console.log("A+")
}
else{
   console.log("grade can't be above 100")
}
// console.log(grade)



let vehicletype=3
switch(vehicletype){
    case 1:
        console.log("your car is bicycle")
        break;
    case 2:
        console.log("your car is motorcycle")
        break;
    case 3:
        console.log("your car is Bajaj")
        break
    case 4:
        console.log("your car is bus")
        break;
    default:
        console.log("your car is auto")
}



let cartype=prompt("Please enter ypur car type")
let carname;
switch(cartype){
    case 'type1':
        carname="bicycle"
        console.log("your car is "+carname)
        break;
    case 'type2':
        carname="motorcycle"
        console.log("your car is "+carname)
        break;
    case 'type3':
        carname="Bajaj"
        console.log("your car is "+carname)
        break
    case 'type4':
        carname="nus"
        console.log("your car is "+carname)
        break;
    default:
        console.log("your car is auto")
}



let age=prompt("enter your age");
let canvote;
age>=18? (canvote="eligible to vote"):(canvote="not enter your age");
document.write(canvote);
//const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function () {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     arrowFullName: () => `${this.firstName} ${this.lastName}`
//   };
  
//   console.log(person.fullName()); // Output: John Doe
//   console.log(person.arrowFullName()); // Output: undefined undefined