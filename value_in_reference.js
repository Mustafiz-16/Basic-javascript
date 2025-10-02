//Non premetive datatype--->array, function, object


const a = [1,2,3,4,5]
const b = a;
b.push(6)

console.log(a);
console.log({a,b});



let user = {
    name:"fizz",
    age:20,
    study:"CSE"

}
let user2 = user;
user2.name = "Mustafiz";
user2.profession = "student";
console.log(user);
console.log(user2);