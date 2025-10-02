// function getData(dataID, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data",dataID);
//             resolve("success");
//             // reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         },5*1000);
//     });
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


//ekon amder function ta promises er jonno eirkoam hoye jabe simple bolbe je amake dataId dao ami promise dimu er por 5 sec por apanre data return kore ditesi erpor 5 sec por amara amder data pamu promise resolve hoye jabe
function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("success");
            // reject("error");
        }, 5 * 1000);
    });
}

////promise chain
// let p1 = getData(1) //amra eikhane kinto getNextdata nitesi nah
// p1.then((result) => {
//     console.log(result);
//     let p2 = getData(2);
//     p2.then((result) => {
//         console.log(result);
//     })
// })

//ekon amader data1 eita 5sec por ashtese


////promise chain shortcut
// getData(1).then((result) => {
//     console.log(result);
//     getData(2).then((result) => {
//         console.log(result);
//     })
// })

//abar eita ke likhar r ekta better hoy ase 

// getData(1)
//     .then((result) => {
//         return getData(2);
//     })
//     .then((result) => {
//         console.log(result);
//     })

//eikhnae ki hoitase getData1 suceesfull hoye gele getdata 2 re call koro erpor eita return koro  return getData(2); erpor jodi eita succefull hoy jai tarpor amra chaile data3 ke call korte pari so on....erpor last e final success message print korte pari




//eita hoitase promises chain
// getData(1)
//     .then((result) => {
//         return getData(2);
//     })
//     .then((result) => {
//         return getData(3);
//     })
//     .then((result) => {
//         return getData(4);
//     })
//     .then((result) => {
//         console.log(result);
//     })

//eikhane .then er bitore .then er biotre .then this chain of .then eita ke bole promise chain

//ekon jodi amra promises chain er code ta ke callback hell er sathe comparison kori tahole dehkmo easy to understand eita kinto eita te jodi like statement add callback hell er moto eita o complex hobe 

console.log("getting data1...");
getData(1)
    .then((result) => {
        console.log("getting data2...");
        return getData(2);
    })
    .then((result) => {
        console.log("getting data3...");
        return getData(3);
    })
    .then((result) => {
        console.log("getting data4...");
        return getData(4);
    })
    .then((result) => {
        console.log(result);
    })


//ekon promise chain o difficult to understand tai ekon amra r ek level upore giyea new concept  shikmo hocche ////Async Await



////Next topic------>Async Await
