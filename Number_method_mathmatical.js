//toString() → number ke string e convert kore

let a = 123;
console.log(a.toString(2));
console.log(a.toString());

//Number("123") → string ke number e convert kore

let s = '123';
// let s = 'Fizz';
let n = Number(s);
console.log(n);

//toFixed(n) → decimal er por koto digit thakbe set kore
let w = 123.4578;
console.log(w.toFixed(0));
console.log(w.toFixed(1));
console.log(w.toFixed(3));
console.log(w.toFixed(6));

//toPrecision(n) → overall number er total length set kore

console.log(w.toPrecision(3));
console.log(w.toPrecision());
console.log(w.toPrecision(4));

//BigINT

let x =BigInt(123404055994040840404084084094084094094084040940984098);
console.log(typeof(x));

// let y = Number(x)/5;
// console.log(y);

// let y =5;
// console.log(Number(x)/y);

