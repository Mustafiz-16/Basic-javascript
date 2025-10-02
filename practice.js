//we are given array of marks of students. Filter out of the marks of students that scored that 90+

let a = [87,93,64,99];

a.filter((element) =>{
    if(element > 90){
        console.log(element);
    }
})


let toppers = a.filter((element) =>{
    return element > 90;
});

console.log(toppers);

//Take a Number n as input from user. Create an array of numbers from 1 to N

let n = prompt("Enter a Number");
let arr = [];

for(let i =1; i<n; i++){
    arr[i-1] = i;
}
console.log(arr);


//use the reduce method to calculate Sum of all numbers in the array

let sum = arr.reduce((prev,cur)=>{
    return prev+cur;
})
console.log("sum =",sum);

//use the reduce method to calculate product of all numbers in the array
let factorial= arr.reduce((prev,cur)=>{
    return prev*cur;
})
console.log("factorial =",factorial);