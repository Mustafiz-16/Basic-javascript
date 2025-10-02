let age = 24;
let exp = 2;
// console.log("My age is",age,"and my experince is", exp);
console.log("My age is"+age+"and my experince is"+exp);
// console.log("My age is "+age+" and my experince is "+exp);


//you write string in 3 way
console.log("Fizz")
console.log('Fizz')
console.log(`Fizz`)  // `back tick bole eitake


console.log(`My age is ${age} and my experinence is ${exp}`);  //eikhane age r exp er jaigai dynamic value disi


//musta"fiz
console.log("musta\"fiz");
console.log(`musta"fiz`);
console.log('musta"fiz');


console.log("musta'fiz");
console.log(`musta'fiz`);
console.log("musta\'fiz")


//Template Strings allow variables in strings.



//JavaScript e template literal use kore tumi string er moddhe dynamic value (variable) boshate paro.

let name = "Biriyani";
let text = `The meal is ${name}`;  // backticks diye variable embed
console.log(text);

//${name} → ekhane variable er value string er moddhe insert hocche.
//Ekhane backticks ` lage.