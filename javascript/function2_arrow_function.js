//Arrow function =>


// function sum (a,b){
//     return a+b;
// }
//sum function convert in arrow function(1st way)
let sum = (a,b) => {
    return a+b;
}
let s = sum(4,9);
console.log(s);

//-----------------

//secondway
let functionvariable = (s,p) => {
   console.log(s-p);
}
functionvariable(3,5);

functionvariable = 9;
console.log(functionvariable);


//-------------

//multiplication function
// function mul(a,b){
//     return a*b;
// }
//multiplication function convert in arrow function(second way)
const  multiplication = (x,y) => {
    console.log(x*y);
    
}
multiplication(4,6);

//------------------

// const printhello = () => {
//     console.log("hello");
// };
// printhello();

//single line of code-->jokhon ekta expression thakbe eivabe use korte pari
const printhello = () => console.log("hello");
printhello();

const arrowfunction = (a,b) => console.log(a+b);
//------------------


