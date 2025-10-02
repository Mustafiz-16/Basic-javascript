let a = [2, 8, 9, 6, 4];
console.log(a);

// function add10(a){
//     return a+10;
// }
// a = a.map((a) => {
//     return a+10;
// });
// console.log(a);

//array map method
let a1 = a.map((value, index, array) => {
    console.log(value, index, array);
    return value + index;
});
console.log(a1);
//foreach use kori jokhon kono existing array element operation korte hoy
let nums = [2, 4, 6, 8];

nums.forEach(function (n) {
    console.log(n * 2);
});




//array filter method--->ekta function dei then eita jesob value jonno true hobe oita return korbe new array te r jeigula true hobe nah oigula return korbe nah 


let arr2 = [45, 23, 21, 0, 3, 5]

let arr = arr2.filter((a) => {
    return a < 10;
})
console.log(arr);


//array map and filter er moddhe orginal array tik thakbe oigula te kono changes hobe nah
console.log(a, a1); //map
console.log(arr2, arr); //filter





console.log();
//Array reduce Method----> eita hocche ekta value return kore

// let arr3 = [1,2,3,5,2,1];
// let a4 = arr3.reduce((m1,m2)=>{
//     return m1 + m2 //eikhane 1+2 pass korbe then result ashbe 3 then 3 er sathe 3 plus korbe 3+3 mane 6 pass hobe then hocche 6 er sathe 5 add kore pass korbe 6+5 mane 11 then 11+2 pass hoye ashbe 13 then 13+1 pass hoye ashbe 14 eita output ashbe
// })
// console.log(a4);



let arr3 = [1, 2, 3, 5, 2, 1];
const reduce_func = (m1, m2) => { //javascript e function variable er moto banano jai
    return m1 + m2
}
let a4 = arr3.reduce(reduce_func)
console.log(a4);


//largest number to find out from any array
let arr4 = [5,16,2,1,3];
const output = arr4.reduce((prev, curr)=>{
    return prev > curr ? prev:curr; //previous r current er moddhe jeita boro eita prev store korsi then hocche abar hoche prev r current er moddhe jeita boro prev store korsi then last e hoche prev moddhe thakbe value but curr r thakbe nah kicho thokon hocche prev return korbe
});
console.log(output);


//smallest number to find out from any array
let arr5 = [5,16,2,1,3];

let ans = arr5.reduce((prev,curr) =>{
    return prev < curr ? prev:curr;
})
console.log(ans);

//foreach use kori jokhon kono existing array element operation(normally caluclation othoba print kora) korte hoy 
//map---> array return kore
//filter -->array return kore
//reduce ---> value return kore


