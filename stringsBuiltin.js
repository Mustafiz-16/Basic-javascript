//touppercase & LowerCase
let s ="Fizz";
// console.log(s);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());



s ="hello";
console.log(s);
s.toUpperCase();
let s2 = s.toUpperCase();
console.log(s,s2)



//trim
// s= "    Mustafizur Rahaman   ";
// console.log(s.trim());  //samne r pichoner space ney nah trim
// console.log(s,s.length);




// s= "    Mustafizur Rahaman   ";
// console.log(s,s.length);
// s2 = s.trim();
// console.log(s2,s2.length);


//indexof
s= "    Mustafizur Rahaman   ";
console.log(s.indexOf("r"));
console.log(s.indexOf('M'));
s2 = s.trim(); //s2 = "Mustafizur Rahaman"
console.log(s2.indexOf('M'));
console.log(s2.indexOf('a'));

//lastIndexof
console.log(s2.lastIndexOf('a')); //eita last theke koto number ase eita index dibe
//charAt
console.log(s2.charAt(4));  //eita mane 4 number index kon character ase
console.log(s2[4]);  //eita mane o bujai 4 number index kon character ase




//slice
let v = "mustafizurrahaman";
console.log(v.slice(2));
console.log(v.slice(5)); // substring from i to end (5 to end)
console.log(v.slice(2,6)); //substring from index i to j-1 (2 to 5)


// v.slice(2,6);
// console.log(v);

s4 = v.slice(2,6);
console.log(v,s4);


//split
let a = "mustfiz is a teacher at xyz.com";
console.log(a);
let arr = a.split(' '); // arr =["mustfiz", "is", "a", "teacher"] ei jinish ta ke split use kore kora jai
// console.log(arr);
for (const element of arr) {
    console.log(element);
}


a = "a,gh,b,tr,w,v";
console.log(a);
arr = a.split(',');
// console.log(arr);
for (const element of arr) {
    console.log(element);
}