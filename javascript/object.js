// object is kind of like map/dictionary where we have key-value pairs
var  details = ["mustafiz",24,75,false];

let x ={ //x is the object
    name:"Mustafiz", //key:value
    "nick name": "Fizz",
    'last name': "Chowdhury",
    age:23,
    cgpa:3.5,
    isMarried: false
};
// console.log(x);
// console.log(x.age);
// console.log(x.name,x.age,x.cgpa,x["last name"],x.isMarried);
// console.log(x['name'], x["age"],x.cgpa);


console.log(x.age);
x.age = 25;
console.log(x.age);
x['age'] = 25;
console.log(x['age']);





details = ["mustafiz",24,75,false];
console.log(details);
details[0] = 'Rohan';
console.log(details);

let car ={
    name: "Honda City",
    mielage: 25.8,
}
console.log(car);
console.log(car.name);


