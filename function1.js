//code er reusability jonno function amra use  kori
// function onetoN(n){
//     for(let i =1;i<=n;i++){
//         console.log(i);
//     }
//     console.log();
// }

// onetoN(5);
// onetoN(19);
// onetoN(7);


function eqn(a,b){
    return Math.abs(a*a*a )+Math.abs (b*b*b)
}
console.log(eqn(2,4));


let a =-2;
let b = 3;
console.log(a*a + b*b);
console.log(a*a*a + b*b*b);
console.log(Math.abs(a*a*a )+Math.abs (b*b*b)); //positive value


//function definiton
function myfunction(){
    console.log("welcome to intern program");
}
//function call
myfunction();


//specific message print korte chaile eita amar input er upor depend korbe
function myfunction1(msg,n){  //parameter -->input
    console.log(msg);
    console.log(msg*n);  //NAN-->Not a number(string r number er sathe eivabe multiply korle hobe nah)
}
myfunction1("I love js",100); //argument

//parameter --->function definition er moddhe je variable use kori eita hocche parameter

//argument-->function call er bitore je value pass kore dei oita ke argument bole


//function -->2 numbers,Sum

function sum(a,b){
    console.log(a+b);
}
sum(40,23);

//return function
function sum(x,y){  //function er bitor je parameter ashe eigula local variable moto act korbe mane ei function er scope er bitor thakbe
    //scope --> local variable gulo kothokon kaj korbe mane eigula ei function er curly brackets{} porjonto kaj korbe erpor eigula r exist korbe nah
    //func params--> like local variables of function -->block scope 
    s = x +y;
    // console.log(x); 
    return s
    console.log("after return"); //unreacheable code mane --> ei code khokhono run hobe nah karon function er moddhe  return er por kono code amader kaj kore nah

}

 let val = sum(3,40);
 console.log(val);

// console.log(x); //eita undefined ashbe karon x hocche sum function er part tai eita kaj kore nai jodi eita sum function er bitore dei thokon kaj korbe