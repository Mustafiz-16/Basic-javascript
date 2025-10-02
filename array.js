arr=[1,2,3,4];
// console.log(arr);
n = arr.length;
// console.log(n);

// for(let i =0;i<=n;i++)
// {
//     console.log(arr[i])
// }

// console.log(arr[3]);

// push or pop
arr =[2,3,4,5,6];
console.log(arr);
arr.push(9);  //add at last 

console.log(arr);
arr.push(0);
console.log(arr);

arr.pop(); //remove last element of array
console.log(arr)

// Shift or unshift 

arr.unshift(24);  //add at First
console.log(arr);

arr.shift(); //remove at first element
console.log(arr);

//concat

let a ='Mustafizur'
let b = 'Rahaman'
console.log(`${a} ${b}`);




//join(" - ") → array ke string banay



// let arr = [1,2,3].push(40);
// console.log(arr);


//string js---> immutable
//array js ----> mutable



//combine two Array in different ways
let x =[1,2,3];
let y =[4,5,6];

//split method
let ar = [...x, ...y]
console.log(ar);



//flat method
let z = [x,y].flat();
console.log(z);

//concat method 
let r = x.concat(y)
console.log(r)

//push method
x.push(...y);
console.log(x);


//split method
const p = [1,2,3,4,5,6];
const q = [...p];

q.push(7);

console.log({p,q});



