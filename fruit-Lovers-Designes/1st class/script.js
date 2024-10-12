// declaring and defining a function

function myfunction(x,y,z){
    var sum = x+y+z;
    console.log(sum);
}
myfunction(30,20,50);
// myfunction(10,40,60);


function adder(x,y,z){
    var total = x+y+z;
    return total;
}
console.log(adder(20,40,34));

function average(a,b,c){
    var mean = adder(a,c,b)/3;
    return mean;
}
console.log(average(23,65,28));



var myfun = function(){
    console.log("hello fun");
}
myfun();


var myexample = (x)=>{
    var bb =x/10;
    console.log(bb);
}

myexample(100); 
function functionscoping(){
    var msg ="hello world";
    if(true){
        var msg = "hello block";
        console.log("inside if block",msg);
    }
    console.log("inside function",msg);
}
    
functionscoping()
function myfu(){
    let mg="hello"
   
    // var x=10
    if(true){
        let mg="hello 10"
        console.log("inside ",mg)
    }
    
    console.log("inside here",mg)
}
myfu()



function my(){
    var x=4;
    if(x<5){
        
    }
}

// function myfunc(){
//     alert("this is an alert box")
//     console.log(alert)
// }
// myfunc()









