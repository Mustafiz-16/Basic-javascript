// const person = {
//     name: "Mustafiz",
//     age: 25,
//     city: "Dhaka"
// };
// const { name, age, city } = person;
// console.log(name, age, city); 



// const person = {
//     name: "Mustafiz",
//     age: 25,
//     address: {
//         city: "comilla",
//         zip: 3500
//     }
// };

// const { name, address: { city, zip } } = person;

// console.log(name, city, zip);



const data = {
    name: "Mustafiz",
    age: 25,
    education: {
        college: "CSE Dept",
        location: {
            city: "Comilla",
            building: {
                floor: 3,
                room: {
                    number: 14,
                    items: ["Chair", "Table", "Laptop"]
                }
            }
        }
    }
};

// Fourth-level destructuring
const { 
    name, 
    age, 
    education: { 
        college, 
        location: { 
            city, 
            building: { 
                floor, 
                room: { number, items } 
            } 
        } 
    } 
} = data;
console.log(name, age, college, city, floor, number, items);




