//JavaScript e destructuring ekta powerful concept, jeita arrays ba objects theke values ke direct variables e extract korte use hoy.


//one depth 

let person = ["Fizz", 25]
let [nickname, old] = person
console.log(nickname, old);

//Two depth
let user = ["Rakib", 20, [10, 20, 30, 40]];
// Destructuring way
let [name, age, [a, b, c, d]] = user;
console.log(name, age, a, b, c, d);



const user1 = ["Rakib", 20, ["Dhaka", "Bangladesh"]];
const [name1, age1, address] = user1
console.log(name1, user1, address);

const [city, country] = address;
console.log(city, country);


//Three depth
const info = ["mustafiz", 25, "CSE", ["comilla", ["Baghichagaon", 14, "biriyani"]]]

const [fullname, age3, subject, [City, [Home, birth, food]]] = info
console.log(fullname, age3, subject, City, Home, food, birth);


//Fourth depth
const info1 = ["Mustafiz",25,"CSE",["Comilla",["Baghichagaon",14,["Biriyani","Tea","Lassi"]]]];

// Fourth-depth destructuring
const [Fullname,Age,Subject,[city1,[home,date,[food1, food2, food3]]]] = info1;

console.log(Fullname, Age, Subject, city1, home, date, food1, food2, food3);






const numbers = [10, 20, 30, 40, "fizz", [1, 2, 3, 4]];
//Destructuring e exact array or object er naam use korte hobe, undefined variable use korle error asbe.

// const [x,y,...rest] = n; //error ashbe

// const [x,y,...rest,[p,q,r,s]] = numbers;  //JS e rest must be last in destructuring syntax

const [x, y, ...rest] = numbers;

console.log(x, y, rest);



