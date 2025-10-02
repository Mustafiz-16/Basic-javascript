
////call back hell


//nested if-else
let age = 19;
if(age>=18){
    if(age>=60){
        console.log("senior");
    }
    else{
        console.log("middle");
    }
}
else{
    console.log("child");
}

//nested Loop
for(let i=0; i<5; i++){
    let str = "";
    for(let j=0; j<5; j++){
        // console.log(j);
        str = str + j;
    }
    // console.log(str);
    console.log(i, str);
}



// function getData(dataId){ //2s
//     setTimeout(() => {
//         console.log("data", dataId)
//     }, 2*1000);
// }
////eigula sob 2sec e  execute hoye jabe
// getData(1); //2s
// getData(2); //2s
// getData(3); //2s
////amara ei 3ta data chai 1st e 1 ashbo then 2 and last 3 eigula sob 2sec por por ashte hobe
//data1
//data2
//data3


function getData(dataId, getNextData){ //2s
    setTimeout(() => {
        console.log("data", dataId)
        if(getNextData){
            getNextData();
        }
       
    }, 2*1000);
}

// getData(1,getData(2)); ////error ashbe karon getData(2) eirokam vabe callback function amra call korbo nah karon eikhane function er sathe parenthesis aisha porse jar karone eita immediately execute hoye jabe (infact eita age execute hoye gese tai Data 2 age dehkmo) tai callback er moddhe kono argument pass korte hole amader eivabe likhte hobe
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

//ei je arrow function eita immediately execute hoy nah eita ekta function hoye gese mane ekon hoye gese function er moddhe r ekta function(getdata er moddhe r ekta function this is our callback)


//eikhane amra getdata er moddhe first callback pass kore disi second time je getData(2); call kortesi eitate toh getNextData nai tai ekta check disi jodi if er moddhe jodi getnextdata function exist korle getNextData() ke call korbe



//eibar amra dehkmo je first hocche 2sec por data1 ashbe erpor 2sec por data2 ashbe


////accha eikhane je if(getNextData) eita ki indicate kortese hocche arrow function e then eitar moddhe je getNextData ase eita ki abar getData(2) er similar naki

//getNextData holo parameter name, jehetu arrow function pass kora hoyeche, tai truthy → if block true. 
// getNextData() call korle arrow function execute hoy, mane getData(2) run hoy.

////callback hell
getData(1, () => {
    console.log("getting data2...");
    getData(2, () => {
        console.log("getting data3...");
        getData(3, () => {
            console.log("getting data4...");
            getData(4);
        });
    });
});

//data 1 data2 ke get kortese data 2  data3 ke get kortese data 3 data4 ke get kortese then data 4 finally amader kase ashse eigula 2sec por por ashbe.

//// ei jinish ta ke bole callback hell mane eikhnae first callback er moddhe r second call back diyea disi r second callback er moddhe third callback diyea disi third callback er moddhe fourth callback diyea disi this is Nested callback


////so the definiton of callback Hell is---->Nested callbacks stacked below one another forming a pyramid structure(pyramid of Doom)
//This style of programming becomes difficult to understand & manage

//tai callback hell is problem in javascript r eita ke solve korar jonno hocche amader kase new concept ashe jeita Name hocche ////Promises

////callback amader kase thake programming e r jokhon callback beshi nested from e use kori deeper nested form e use kori thokon callback Hell problem ashe r ei callback hell problem ke solve korar jonno amader kase promises ashe.


//Next toptic-----Promises



////callback hell er maddome kinto amra Asynchronous function ta ke synchronous way te niyea ashi jar example hocche je 2sec por por Data 1 er 2sec por Data 2 eibabe ashtese jinish ta Synchronous way te
