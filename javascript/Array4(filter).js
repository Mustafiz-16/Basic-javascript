
//filter out even elements

// function fun(element){
//     if(element%2!=0) return true;
//     else return false;
// }

let arr = [1,9,2,7,4,5,6,2,8];
console.log(arr);

//filter ami rakte chachi jei sob element odd or even 

//----->First way

// let brr = arr.filter(fun);
// console.log(brr);

// arr = arr.filter(fun);
// console.log(arr);


//--->Second way

// arr = arr.filter(function fun(element){
//     if(element%2!=0) return true;
//     else return false;
// });
// console.log(arr);

// arr = arr.filter(function fun(element){
//     if(element%2==0) return true;
//     else return false;
// });
// console.log(arr);

//---->Third way

arr = arr.filter((element) =>{
    if(element%2==0) return true;
    else return false;
});
console.log(arr);

// arr = arr.filter((element) =>{
//     if(element < 5) return true;
//     else return false;
// });
// console.log(arr);

//--->Fourth way (shortcut)

// arr = arr.filter((element) => (element < 4));
// console.log(arr);






arr = arr.filter((element) =>{
    return (element < 5) ? true : false;  //ternary operator

});
console.log(arr);


//filter() → condition match kore new array dei