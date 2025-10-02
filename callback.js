//call back function --> call back function ekta function jeita r ekta functionn er vitore pass hoy

function products(a,b,c){
    return a*b*c;
}
// console.log(products(5,-1,6));

// function fun(x,y){
//     console.log(x-y);

// }
// fun(products(3,8,9),7) 


function fun(x,y){
    let a = x(2,5,4);
    console.log(a-y);
}
fun(products,7); //products eikhane ekta call back function


//call back function hocche kono ekta function er moddhe amra onno ekta function call kori argument diyea


//A callback is a function passed as an argument to another function

//jodi kono function er moddhe amra r ekta function pass kori oita call back function bole

function sum(a,b){
    console.log(a+b);
}
function calculator(a, b,sumCallback){
    sumCallback(a,b)
}
calculator(1,2,sum);//je function hocche onno ekta function er moddhe as an argument pass hoy oita ke bole callback function

//eikhane sum er jaigai complete function ta pass korsi eita valid syntax
// calculator(1,2,(a,b) =>{
//     console.log(a+b);
// });

//ei call back ta hocche synchronous callback 




const hello = () =>{
    console.log("hello");
}
setTimeout(hello,3000);

//ei settimeout er moddhe amader call back ta hocche Asynchronous call back hoye te kaj kore Normally callback Synchronous hoye te kaj kore


//ei call back ta hocche Asynchronous callback 



//Next topic--->callback hell
