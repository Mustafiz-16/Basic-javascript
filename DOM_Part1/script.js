//DOM ---> Document object Model

// alert("hello!");

//console.log--> print korai
//console.dir---> amader je special object ase eigula ke access kori like  (document)--> eitar property r method print koraite kaj e ashe

//object ke print koraite hocche amra console.dir use kormu console.dir(window.document)


//amader je html ase eita javascript er moddhe access korte pari  window object er moddhe tar ekta object ase document name e ei document hocche model, representation of html eitake hocche dom boli. dom mane document object model.

//when a web pages is loaded, the browser creates a document object model (DOM) of the page

// console.log(window)
// console.dir(window);
// console.dir(window.document);
console.dir(document.body);  //js object ashbe 
console.log(document.body); //eita hocche object pora html version ta ashbe mane body sob tags ashbe
console.log(document.head);


//dom tahole html er code ke javascript e access korar way hocche dom

//user er input er upor based kore je changes kori oita ke boli dynamic changes or dynamic manupulation toh eigula korar jonno dom use kori. 

//selecting with id
let heading = document.getElementById("heading")
// let heading = document.getElementById("headings")  //null ashbe
console.log(heading);


//selecting with class
let title = document.getElementsByClassName("title");
// let title = document.getElementsByClassName("titles"); //empty html collection ashe
console.log(title); //html colection return kore this is kind of array



//jokon id element nah thake thokon null print kore ashe r jokhon class element exist kore nah thokon empty html collection ashe


//seleting with tag
let paras = document.getElementsByTagName("p");
console.log(paras);



//query selector --> er moddhe amra id pass korte parmu, element, tag pass kote parmu 

let firstelements = document.querySelector("p"); //eita hocche eita sathe matching first element return kore dibe jodi sob element chai thokon eita querySelectorAll use korte hobe
let forall = document.querySelectorAll("p");
console.log(firstelements);
console.log(forall);

//queryselector amader jonno node list return kore node hocche amader je dom er je tree ase eita protekta individual jinish hocche ekta node r node er moddhe jokon amra multiple list banamo thokon eita ke nodelist bolbo





let clasname = document.querySelector(".title"); //queryselector moddhe classname dot (.title) diyea likhte hobe r eikhane kinto eita same classname er shodhou first er ta ke return korbe r bakigula return korte hoile queryselectorAll dite hobe.
let cllasname = document.querySelectorAll(".title");
console.log(clasname);
console.log(cllasname);




let firstid = document.querySelector("#heading");
let allid = document.querySelectorAll("#heading"); //id te querselectorAll sense kore nah karon id te base kore only single element e ashbe
console.log(firstid);
console.log(allid);


//queryselector----
//class er jonno-->queryselector,queryselectorAll
//id er jonno--->queryselector
//tag er jonno--->queryselector,queryselectorAll







//so eigula maddohme amra hocche amader elements ke access korte parmu erpor amader kicho property ase jeigula moddhe value check korte parmu abar change korte parmu
//ei pproperty use kore value ke get(mane check kora) korte parmu, set(mane change,update) korte parmu 
//propertis gula hocche --> tagname,innertext,innerhtml,textcontent
//Next lecture---properties(DOM_part2)