//Async-Await 

//async ---> async function always return a promise

//async function is return a promise compulsory
async function hello() {
    console.log("hello");
}

//await pauses the execution of its surronunding async function until the promise is settled

//suppose kono function ke amra call korsi and oi function theke promise ashbe eirokam kono function ke call korle and oi function ta samne await likhe dile eita wait korbe promise er jonno and eita asheapasher sob execution stop kore promise er jonno wait korbe jotokhon amader promise amader kase settled hoytese //// mane jothokon  promise pending thothokon amra await e kormu


//await keyword ke amra async function er bitore use korte parmu bahire parmu nah 



function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve("200") //sucess er jonno ei number pass kori
        },2*1000);
    })
}

// await api(); //eibabe await likhle error ashbe amra async er bitor shodhou likhte parmu await ke

////async-await
// async function getweatherData() {
//     await api();
// }
//ei vabe hocche async r await likhi amder kase kono function ase jeita hocche promise return kore ei promise e accept korar jonno amra .then,catch, callback use kori nah  amra async r await ke kichota eibabe use kori

//ekon amra amader api ke 2 bar call korte hobe

////async-await
async function getweatherData() {
    await api(); //1st call
    await api(); //2nd call
}
//async function er await use korate amader first e first kaj hobe er por Second  await jabe erpor third eivabe jabe
//like instagram er moddhe first username check hobe er por password check hobe tarpor amader user access pabe toh ei type er kaj er jonno async await suitable




//eita ke async-await e likhmo
function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("success");
            // reject("error");
        }, 5 * 1000);
    });
}
////Async-await
async function getalldata(){
    console.log("getting data1.....");
    await getData(1); //jeikhane await likha ashse eikhnae await korbe kothokon oi je timeout diyea raksi 5 sec erpor data1 ashbe then Next e jabo
    console.log("getting data2.....");
    await getData(2);
    console.log("getting data3.....");
    await getData(3);
    console.log("getting data4.....");
    await getData(4);
    console.log("getting data5.....");
    await getData(5);
    console.log("getting data6.....");
    await getData(6);

}
//first data1 er jonno await kortese then hocche jokhon data1 chole ashse then await kortese data2 er jonno then jokhon data2 chole ashse await kortese data3 er jonno eivabe hocche cholte thakbe untill come all data


//ei code ta jodi this is easy compare to callback hell or promises chain theke


////Next topic--->comparison callback hell then promises chain  and async-await