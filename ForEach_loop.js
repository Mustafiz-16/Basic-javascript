arr =[3,7,3,8,0,2];
// arr.forEach(element => {
//     console.log(element);
// });


// arr.forEach((element,i,arr) => {  //value, index, parameter
//     console.log(element,i,arr);
// });

//for each loop e amra index show korte pari jeita Forof loop e pari nah


//
console.log(arr);
arr.forEach((element,i,arr) => {
    // console.log(element,i,arr);
    element *=2;
    console.log(element);
});
console.log(arr); //array te kinto double hoitase nah

//function js er moddhe pass kora jai abar return o kora jai tai js er function is very special
function abc(){
    console.log("hello");
}
function myfunc(abc){
    return abc;
}

//callback function is a function passed as an argument to another function
//arr.forEach(callBackFunction)

// normal function
// function printval(val){
//     console.log(val);
// }
// a.forEach(printval); //callback 

let a = [1,2,3,4,5];

// anonymous function
//for each er moddhe call back function e likha
// a.forEach(function printval(val){ //val-->at each index
//     console.log(val);
// })
//--------------------->
// arrow function
//ekon jodi foreach function e likhte chai(jeita alreday call back hisabe kaj kore) 
a.forEach(val => {
    console.log(val);    
});




//for each use kori jokhon array kono element er jonno kono kaj korte hoy
//for each array protek ta element er jonno function ke call back kore



// a.forEach(element => {
//     console.log(element);
// });


// let b = ["cumilla","Dhaka","sylhet"];
// b.forEach(char => {
//     console.log(char);
// });

let b = ["cumilla","Dhaka","sylhet"];
b.forEach((char,index,arr) => {
    // console.log(char.toUpperCase());
    console.log(char,index,arr);
});

//foreach method is only use for array not use in string(error dibe)
//Higher order Function hocche hoy kono function ke parameter hisabe nei othoba return kore
//jeikhane call back function use korte dehkmo oita high order function hoye jabe
//Foreach function hocche higher order function r method


//For a given array of numbers, print the square of each value using the foreach loop

let x = [1,2,3,4];

x.forEach(element => {
    console.log(element*element);
});


//foreach use kori jokhon kono existing array element operation korte hoy eita kinto kono Notun array dei nah
//Notun array dei hocche array Map
//generally foreach,map eishob use korte value niyea kaj kori index r array niye kori nah





//kono ekta function ke jokhon amra object(array,) sathe add kore dei seita hobe method right jemon foreach use korte hole amader array lagbe array sathe foreach bind hoye gese tai foreach ekta method


array.forEach(element => {
    
}); 