

arr = [4,"Fizz", 7.9, true,[4,7,8,9]]
console.log(typeof(arr));  //js er moddhe array ashole ekta object
console.log(Array.isArray(arr)); //js e array ta ashole array kina tar joono eita diye check kori 


var a = "fizz";
console.log(Array.isArray(a)); 

//regular for loop
arr = [4,"Fizz", 7.9, true,[4,7,8,9]]
for(let i =0; i<arr.length;i++){
    console.log(i,arr[i]);
}

brr=[3,7,8,0,2]
// Forof loop
for (const element of arr) {
    console.log(element);
}
