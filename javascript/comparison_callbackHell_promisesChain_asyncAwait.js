// function getData(dataId, getNextData){ //2s
//     setTimeout(() => {
//         console.log("data", dataId)
//         if(getNextData){
//             getNextData();
//         }
       
//     }, 2*1000);
// }
////callback hell
// getData(1, () => {
//     console.log("getting data2...");
//     getData(2, () => {
//         console.log("getting data3...");
//         getData(3, () => {
//             console.log("getting data4...");
//             getData(4);
//         });
//     });
// });
function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("success");
            // reject("error");
        }, 5 * 1000);
    });
}
////promises Chain
// console.log("getting data1...");
// getData(1)
//     .then((result) => {
//         console.log("getting data2...");
//         return getData(2);
//     })
//     .then((result) => {
//         console.log("getting data3...");
//         return getData(3);
//     })
//     .then((result) => {
//         console.log("getting data4...");
//         return getData(4);
//     })
//     .then((result) => {
//         console.log(result);
//     })
////Async-await
// async function getalldata(){
//     console.log("getting data1.....");
//     await getData(1); //jeikhane await likha ashse eikhnae await korbe kothokon oi je timeout diyea raksi 5 sec erpor data1 ashbe then Next e jabo
//     console.log("getting data2.....");
//     await getData(2);
//     console.log("getting data3.....");
//     await getData(3);
//     console.log("getting data4.....");
//     await getData(4);
//     console.log("getting data5.....");
//     await getData(5);
//     console.log("getting data6.....");
//     await getData(6);
// }

////programming er moddhe Generally hocche amra  async-await r hocche .then use kori but beshi use kori asyc-await ...........So, jokhon async-await use kormu thokon .then use kormu nah

//eirokam nah je .then r .cath use kori kori but jokhon async-await use kormu thokhon .then/.catch use kormu nah r jokhon .then/.catch use kormu thkohn async-await kormu nah


////eikhane r ekta jinish kheyal korte hobe je amra je callback hell r promises code ke function er moddhe rakar dorkar pore nah but async-await ke hocche amader function er moddhe rakhte hoy and unneccesary oi function ta ke call korte hoy console e giyea(getalldata()) 

////ei function ke call theke bachar ekta way hocche IIEF(Immediate Invoked Function Expression)
// IIFE ---> IIEF is a function that is called immediately as soon as it is defined (three way we have to define it)
////IIFE function jeikhane likhmo oikhnae execute hoye jabe eder alada kore call korte hoy nah


//(function)();
//// First IIFE--->ekon eita automatically execution hoibo kono function call korte hobe nah
(async function (){
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
})();
//eikhane just function er name ta sorai disi eita amra next time use korte parmu IIFE jodi kono code amra immediately execcute korte chai and ekbar e use korte chai thokon eivbae korbo IIFE er maddhome kormu