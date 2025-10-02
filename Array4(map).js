//Array -->map,filter,reduce

//map basically map = ekta array er element gulo ke modify/transform kore notun array banano

// let arr =[1,6,3,8];
// console.log(arr);
// let brr = [];
// for (const element of arr) {
//     brr.push(element*2);
//     brr.push(element*element);
// }
// console.log(brr);



// let arr =[1,-6,-3,8];
// console.log(arr);
// let brr = [];
// for (const element of arr) {
//     brr.push(element*2);
//     brr.push(Math.abs(element));
// }
// console.log(brr);



function twice(element){
    return 2*element;
}
function square(element){
    return element*element;
}
function add10(element){
    return element + 10;
}
let a = [1,-6,-3,8];
console.log(a);
let b = a.map(twice); //kind of callback
console.log(b);
let c = a.map(square);  //kind of call back
console.log(c);
c = a.map(add10);
console.log(c);


// let d = [1,-6,-3,8];
// console.log(d);
// let e = d.map(function(element){
//     return element*element*element;
// });
// console.log(e);

// let d = [1,-6,-3,8];
// console.log(d);
// let e = d.map((element)=>{    //=> arrow function
//     return element*element*element;
// });
// console.log(e);



// let d = [1,-6,-3,8];
// console.log(d);
// d = d.map((element)=>{    //=> arrow function
//     return element*element*element;
// });
// console.log(d);

//map er shortcut
let d = [1,-6,-3,8];
console.log(d);
d = d.map(element=> element*element*element);
console.log(d);




//---> First way

// function add10(element){
//     return element + 10;
// }

// let arr = [1,6,-3,8];
// console.log(arr);
// arr = arr.map(add10);
// console.log(arr);


//----> Second way 

// let arr = [1,6,-3,8];
// console.log(arr);
// arr = arr.map(function(element){
//     return element + 10;
// });
// console.log(arr);




//--->Third way (Arrow function)--->Foreach method or Foreach function

let arr = [1,6,-3,8];
console.log(arr);
arr = arr.map((element) =>{
    return element + 10;
});
console.log(arr);



//-----> Fourth way (shortcut)

// let arr = [1,6,-3,8];
// console.log(arr);
// arr = arr.map(element => element + 10
// );
// console.log(arr);

//map() → sob element ke modify kore notun array dei


