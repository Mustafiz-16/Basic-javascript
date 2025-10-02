const user = {
    info:["Rakib",20],
    city: "cumilla",
    country:"bangladesh",

}

// const{info:[name,age],city, country}= user
// console.log({name,age,city,country})

const{info:[name,age],city: city2, country}= user
console.log({name,age,city2,country})


const hook = [0, function () {}];

console.log(hook);