let a=[2,8,3,3]; //var,let,arr,const =[2,3,4,5] ek vabe kaj kore sobgula mane eigula te push,pop,unshift,shift sob use korte parmu
console.log(a);
a.push(99);
console.log(a);

a.pop();
console.log(a);

a.unshift(6);
console.log(a);

a.shift(a);
console.log(a);

const arr =[5,8,3,3]
console.log(arr);

arr.push(99);
console.log(arr);

let b=[2,6,7,8];
b[0] = 9;
console.log(b);

// Not in Error
// const c= [2,6,8,9];
// c[1] = 4;
// console.log(c);


// Error
// const f= 2;
// console.log(f);
// f=7;
// console.log(f);

// Error
// const f= [2,6,8,9];
// console.log(f);
// f=7;
// console.log(f);

// Not in Error
const f= [2,6,8,9];
console.log(f);
f[0]=7;
console.log(f);



//Not Error
const c= [2,6,8,9];
c.push(5);
console.log(c);
c.unshift(56);
console.log(c);
c.pop();
console.log(c);
c.shift();
console.log(c);

let d= 5;
console.log(d);
d="Mustafiz"
console.log(d);
d=[4,6,8,9];
console.log(d);
d=true;
console.log(d);








