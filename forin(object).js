let x ={ //x is the object
    name:"Mustafiz", //key:value
    "nick name": "Fizz",
    'last name': "Chowdhury",
    age:23,
    cgpa:3.5,
    isMarried: false
};


//forin Loop
for (const key in x) {
    if (!Object.hasOwn(x, key)) continue;
    // console.log(key);
    // console.log(x[key]); //value
    // console.log(x.key);  //undefined ashbe
    //  console.log(key, x[key]);
    // const element = object[key];       
}
for (const key in x) {
     console.log(key, x[key]);    
    
}