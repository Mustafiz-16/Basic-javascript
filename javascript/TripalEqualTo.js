var a = 5;
var b = 55;

console.log(a==b); //"It automatically outputs true if the values match, and false if they do not.But in C++, if the values match, it shows 1; if not, it shows 0."


//This only happens when you compare a string with a number — in that case, JavaScript performs type conversion.
var a = 5;  //integer
var b = '5';  //string

console.log(a==b); // check value (javascript convert string to Number)
console.log(a===b) // check value and type 

// let a = 'mustafiz'
// let b = 'mustafiz'