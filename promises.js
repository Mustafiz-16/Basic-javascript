//promises---> promise is for "eventual" completion of task. It is an object in js. It is a solution to callback hell.
//


// let promise = new Promise((resolve, reject) =>{
//     console.log("I am a promise");
//     // resolve(123);
//     // resolve("this is first message");
//     // resolve("message");
//     reject("some error occurred");

// });

//promise javascript e ekta object hoy jar 3ta state ase
//promise er 3ta state --->pending, fulfilled(resolved), rejected
//resolve & reject are callback provided by js



// function getData(dataID, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //console.log("data",dataID);
//             //resolve("success");
//             reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         },5*1000);
//     });
// }

//let promise = getdata(123);
//promise(promisestate--->pending thakbe)
//promise(promisestate--->data pabar por promise fulilled hobe)


//promises
//A javascript promises object can be

//pending: the result is undefined
//Resolved: the result is a value (fulfilled)   resolve(result)
//Rejected: the result is an error object         reject(error)



//eikhane promise create kora hoise (resolved & reject) but eita korbe amder jonno onno kew but amader kaj hocche promise use kivabe kore oita janbo

//promise use koora jonno amder kase 2ta function hoy ekta hocche fulfullied hole promise.then((res) =>{ }) r ekta hocche reject hoye gele hoy promise.catch((err) =>{ })


// promise.then (fulfilled mane resolved)
//promise.catch (reject)

//syntax 
//promise.then((res)=> { })
//promise.catch((res)=> { })

//eita normal function jeita promise return kore
const getpromise = () =>  {
    return new Promise((resolve,reject) => {
        console.log("I am promise");
        // resolve("success");
        reject("network error");
    });
}
//eikhane amra function ta ke call korate promise chole ashse amader kase
let promise = getpromise();

// promise.then(() => {
//     console.log("promise fulfilled",);
// })

//error ke catch korte hole amader likhte hobe

// promise.catch(()=>{
//     console.log("rejected");
// })





promise.then((result) => {
    console.log("promise fulfilled",result); // result-->resolved er moddhe je success likhsi eita ashbe 
    // parameter e result hocche oi message jeita amra resolved er somoi pass korsi 
})
promise.catch((error)=>{
    console.log("rejected",error);  //error-->reject er moddhe je network error lihsi eita ashbe 
    // error hocche oi message jeita amra reject er somoi pass korsi
})


//amader kase 2ta function ase then and catch  jar moddhe amra proper function pass korte pari eita thokon execute hobe jokhon promise hoy fulfilled hobe r nah hoy reject hobe r eder moddhe 2ta parameter hoy ekta hocche result r ekta hocche error jeita maddoheme amra resolved r reject er proper value access korte pari

//promise ekta object hoy er moddhe kicho state thake r state gula ke kivabe use korte  pari r promise kivabe use korte pari erpor then r catch. eigula hocche promise er basic



//Next topic--->promises Chain