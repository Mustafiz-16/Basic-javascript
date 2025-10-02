//create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string

// function countvoweles(str){
//     let count =0;

//     //forofloop
//     for (const char of str) {
//         // console.log(char);
//         if(char ==='a' || char === 'e'|| char === 'i' || char === 'o' || char === 'u'){
//             count++;
//         }

//     }
//     return count;

// }
// let c = countvoweles("Mustafiz");
// console.log(c);


//create an arrow function to perform the same task
let vowels = (str) => {
    let count = 0;

    for (const char of str) {
        // console.log(char);
        if(char ==='a' || char === 'e'|| char === 'i' || char === 'o' || char === 'u'){
            count++;
        }

    }
    return count;
}
let c = vowels("aeiou");
console.log(c);