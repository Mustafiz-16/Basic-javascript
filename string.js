let a = "Fizz Hello";
console.log(a,a.length);
console.log();
console.log(a[5]);
console.log();
console.log(a[7]);
console.log();

//for Loop
// let s= "Fizz";
// for(let i =0;i<s.length;i++)
// {
//     console.log(s[i]);
// }


//forof Loop
let s ="Mustafiz"
for (const char of s) {
    console.log(char);
}

console.log(typeof(s));
//foreach Loops does not work for string




let c="hello";
// for(let i =0;i<c.length;i++){
//     console.log(c[i]);
// }
for (const char of c) {
    console.log(char);
}
let d = c.toUpperCase();
console.log(d);
let e = c.toLowerCase();
console.log(e);
let f = "    Mustafiz Rahaman  "
let g =f.trim();
console.log(g);
console.log(f.trim,f.length,g.length);
let h = f.indexOf("M");
console.log(h);
console.log(f.indexOf('u'));
console.log(f.lastIndexOf('n'));
console.log(f.charAt(4));
console.log(f[4]);
console.log(f.slice(6)); //mane ami jodi ekta argument pass kori oita theke last porjonto 

console.log(f.slice(6,12)); //jodi 2 ta argument pass kori tahole first theke last mane (index 6 theke 12 bitor je string gula ase oigula pass korbe)

let s1 = 'if you work hard you will be success in your life';
console.log(s1);
console.log(s1.split('')); //split('') → sob character ke alada array banay.
console.log(s1.split(' ')); //split(' ') → word gula ke space diye cut kore.
console.log(s1.split(' ,')); //split(',') / split(' ,') → string e comma thakle cut hobe, na thakle unchanged thakbe.

a = "a,gh,b,tr,w,v";
console.log(a.split(','));
console.log(a.split(''));

//split() ekta string ke array banay, separator er upor depend kore kothay cut hobe.

console.log(a.split(",", 2));
console.log(s1.split(" ", 2));

//split(separator) → pura string ke cut kore array banay.
//split(separator, limit) → koto ta part banabe seta limit kore dey.


let l = 'hello';
console.log(l.replace('hello','Fizz')); //replace("old","new") → ekta part replace kore

console.log(l.substring(2,4)); //substring(start, end) → slice er moto, but negative index use hoy na

console.log(Math.floor(Math.random()*10));
console.log(Math.round(5.567));