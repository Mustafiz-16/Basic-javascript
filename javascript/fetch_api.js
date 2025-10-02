//Api--->Application programing interface
//Api amader object format e data return kore dei khkhon dei jokhon kono link er moddhe request pathai thokon


//fetch Api ---> The Fetch Api provides an interface for fetching(sending/receiving) resources.

//It uses Request and Response objects.

//The fetch() method is used to fetch a resource(data) 
//syntax let promise = fetch(url,[options])

const URL = "https://dog.ceo/api/breeds/image/random";

// let promise = fetch(URL);
// console.log(promise);

//ekon amader kase multiple way ase result ber korar promises theke .then/.catch and async-await

// const getrandom = async () => {
//     console.log("getting data......")
//     let response = await fetch(URL);
//     // console.log(response);
//     console.log(response.status);
// }
//eikhane ekta jinish kheyal korte hobe je amra jeokhon api call korsi amder kase jokhon  data return hoye ashse amder page reload hoy nai.... but generally page er moddhe jokhon new information ashe seita page reload hoyar por ashe....kinto amra jokhon api call kori  internally amader page reload hoy nah runtime sob information update hoy

//fetch method hocche particular type er request create kore seita hocche Get Request(mane hocche data anar kaj kore kono server theke othoba kono api theke return hoye ashe ei type er request ke get request bolmu)

////fetch method hocche asynchronous method jeita promise return kore

////Maximum time fetch api use kore Get Request (karon eikhane shodhou data receive kori)



////understanding terms

//AJAX is Asynchronous js & XML (age hocche amader data jaito XML Format but ekon jai hocche json format e)
//JSON is javascript object Notation (mane json er moddhe data ashe object format e amader code e je response ta ashtese eita object format e)

//so, ekhon amra Maximum Api jeigula use kori eigula sob json format e data return kore toh eishob Api ke AJAJ(Asynchronous javascript and json) o boli

////jokhon amra kono Api ke Network e request kori eita  response ashe Json format e erpor json format ke javascript object e convert korte hoy ei convert er jonno amra Special format use kori Json () method
// json method o ekta asynchronous method eita o promise return kore eikhane hocche first promise fetch return kore json method second promise return kore So json method

////json() method : returns a second promise that resolve with the result of parsing the response body text as json(Input is JSON, Output is JS object)
//amra json method e input e dei json r output e eita dei javascript object (mane usable data return kore dei)


const getrandom = async () => {
    console.log("getting data......")
    //first promise return kore
    let response = await fetch(URL);
    console.log(response);
    //Second promise return kore
    let data = await response.json()  //json method r jethu eita asynchronous tai eita ke o await kormu then je data retun hoye ashbe eita save kore dimu then finally print kore dimu data ke console.log() e
    console.log(data); //eikhane je data eita amader usable data
}


//Next topic---> fetch api random cat facts genereate korbe