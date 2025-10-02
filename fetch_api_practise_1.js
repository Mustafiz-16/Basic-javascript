const URL = "https://catfact.ninja/facts";
// const URL = "https://cat-fact.herokuapp.com/facts"  //(url kaj kore nah)
// const URL ="https://zenquotes.io/api/random"; //(url kaj kore nah)

// const getrandomquote = async () =>{
//     console.log("getting data....");
//     let response = await fetch(URL); //1st promises ---> response ashe json format e
//     console.log(response);
//     let data = await response.json() //2nd promises ---> json format theke javascript object e 
//     console.log(data);

// }
//eikhane amra dehkmo je getrandom ke call korle amader kase first data ashbe jeita hocche response then response theke amra usable data ber korsi r usable data  moddhe array ase jetita data length =10 erpor er moddhe giyea per data retrive korte parmu 

const getrandomquote = async () =>{
    console.log("getting data....");
    let response = await fetch(URL); //1st promises ---> response ashe json format e
    console.log(response);
    let data = await response.json() //2nd promises ---> json format theke javascript object e 
    console.log(data); //পুরো response object 
    // console.log(data[0]); //undefined
    console.log(data.data);  //ভিতরের cat facts এর array (10ta array ashce)
    console.log(data.data[0]);  //প্রথম fact object
    console.log(data.data[0].fact);  //আসল টেক্সট (fact)

}
//accha data ke emne retrive korle error ashbe console er bitore(data[0]) karon amara je Response theke usable data ber korsi orthat json format theke javascript object e ei object er moddhe ekta data array ase kinto amra je  console.log(data[0]); likhsi kinto data toh ashole ekta pora object (er bitore data property ase) tai data[0] -->undefined 
// right way
//console.log(data.data[0])


//amra je json format thke javascript object paisi eita kicho ta eirokam
// {
//   current_page: 1,
//   data: [ { fact1 }, { fact2 }, ... ],
//   first_page_url: "...",
//   last_page: 34,
//   links: [ {..}, {..}, ... ],
//   total: 332
// }

//data → পুরো response object
// data.data → ভিতরের cat facts এর array
// data.data[0] → প্রথম fact object
// data.data[0].fact → আসল টেক্সট (fact)



//ei je last e fact ta pailam mane text ta this was the actual data that we required from the api


//ei type er data jeita hocche amader api theke return hoye ashe ekon amra ei data ke use korte pari chaile amader html page e print korte pari 

