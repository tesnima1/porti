// function add(x,y){
//     if(isNaN(x) || isNaN(y)){
//         return "nop";}
//     else{
//         var sum=x+y;
//         return sum;
//     }
// }
// document.write(add("a",3));
// let x=1;
// while (x<10){
    
// document.write(x+ "<br/>");
// x++;}
// document.write("hi ato abubeker")
// let y=10;
// do{
//     document.write("hello famniyo" + "<br>");
//     y--;

// }
// while(y>0);
// let y=prompt("enter a minute:");
// function converter(){
//     return "the second is:" + y*60;
// }
// document.write(converter());
// let result=1;
// function factorial(x){
  
//     while(x>0){
       
//        result=result*x;
//         x--;
        
        
//     }
//     return result;
    
// }
// document.write(factorial(5));
// function factorial(x){

//     for(let i=1; x>0; x--){
//         i*=x;

//     }
//     return i;

// }
// document.write(factorial(5));
// function sum(x){
//     let result=0;
//     while (x>0){
//         result+=x;
//         x--;
//     }
//     return result  + "<br>";
// }
// document.write(sum(10));

// function area(w,h){
//     let A=w*h;
//     return A + "<br>";
// }
// document.write(area(5,4));

// function gamescore(win,draw,lose){
//     let total=win*3 + draw*1 +lose*0;
//     return total +"<br>";
// }
// // document.write(gamescore(3,4,2)+ "<br>");
// document.write(gamescore(3,2,1));
// function counter(x){
    
//     for( i=1; i<=x;i++){
        
//         document.write(i+ "<br>")
//     }

// }
// counter(90)

// function display(array){
//     return array[0];
// }
// document.write(display(array=[2,3,4,5,6]));
//  function Mtable(x){


//     for (let i=1;i<=x; i++){
//         for (let j=1; j<=x; j++){
//             let result=i*j;
//             document.write(result + "    " );
        
    
            
//         }
//         document.write("<br>")
//       }
     

//  }
//  Mtable(10)
function trianglee(x){
    for(let i=1;i<=x; i++ ){
        for(let j=1; j<=i; j++){
            document.write( " ")

        }
        for(let j=1; j<=i; j++){
            document.write("$" )
        }
        document.write("<br>")
       
    
    }
    
}
trianglee(5)
// function triangle(y){
//     for(let i=1;i<=y; i++ ){
        
//         document.write("<br>")
//     }
// }
// triangle(5)
