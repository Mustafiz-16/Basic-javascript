////First
// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 4*1000);
//     });
// }
// console.log("fetching data1......");
// let p1 = asyncFunc();
// p1.then((result) => {
//     console.log(result) 
// });

//settimeout hocche some data1 print korse 3 sec por then jokhon eita print korse promise amder resolve hoye gese jokhon promise resolve hoye gese .then execute hoye gese jokhon .then execute hoye gese amder kase  result print hoye gese and the result was success 



// Promise create hole start state = pending

// resolve("success") call hole state = fulfilled, value fix = "success"

// resolve print kore na, শুধু value store kore

// value use korte .then() লাগবে

// .then(result => …) → result == resolve() er value

////Second
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 4*1000);
//     });
// }
// console.log("fetching data2......");
// let p2 = asyncFunc2();
// p1.then((result) => {
//     console.log(result) 
// });

//eikhane jehthu 4 sec disi timeout tai data1 r data 2 ek time e sob chole ashe amra chaitesi hocche je first e data 1 fetch hobe erpor hocche data 2 fetch hobe erjonno amra chaining korte hobe.
//chaninig mane ekta then er bitore r ekta then use korte pari...amra chaitesi first promise resolve hole erpor  Second data joono Search hobe mane instragram database e username thakle erpor hocche passeword er jonno search koro eirokam type er logic kichu ta



////Third
function asyncFunc3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data3");
            resolve("success");
        }, 4*1000);
    });
}
////Fourth
function asyncFunc4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data4");
            resolve("success");
        }, 4*1000);
    });
}
////promises chain
// console.log("fetching data3......");
// let p3 = asyncFunc3();
// p3.then((result) => {
//     console.log(result);
//     console.log("fetching data4......"); 
//     let p4 = asyncFunc4();
//     p4.then((result) => {
//         console.log(result);
//     })
// });
//ekon ki hobe amder first data3 fetch hobe erpor 4 sec por giyea hocche data4 fetch hobe and print hobe

//chaining er mane hocche ek .then er sathe r ekta .then chan kore rekhe disi





////shortcut jodi kori promises chain take

// console.log("fetching data3......");
// asyncFunc3().then((result) => {
//     console.log(result);
//     console.log("fetching data4......"); 
//     asyncFunc4().then((result) => {
//         console.log(result);
//     })
// });

////r ekto easy kora jai like---shodhou success jei likha ta ashbe eita ekto sorai disi that's it. 
console.log("fetching data3......");
asyncFunc3().then((result) => {
    console.log("fetching data4......"); 
    asyncFunc4().then((result) => {})
});




////overall jinish ta hoitase giyea je ami data 1 r data 2 hocche timeout same hoya te 4 sec por chole ashchilo eksathe then amra promises chain er maddhome data3 r data4 ta hocche giyea .then use korate mane ekta .then er bitor r ekta .then use korai ekon data 3 r data 4 ekon ekta 4 sec por giyea hocche r ekta data ashtese .......but kotha hocche ei same jinish ta toh callback hell maddhome o korsi je sametime out set korate eksathe data gula ashchilo er por nested call back use er.... maddhome amra solve korchilam eikhane difference ta hocche callback hell r promises er moddhe Syntax.promises er promises chain er syntax ta ekto easy hocche callback hell er theke.

//Callback hell r Promise chain outcome same dite pare, kintu Promise er syntax clean & manageable.

//Callback hell মানে nested callback, setTimeout শুধু তার demo দেখানোর জন্য ব্যবহার করা হয়।



//Next--->convert call back hell to promise chain