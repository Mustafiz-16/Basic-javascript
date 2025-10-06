//so ekon porjonto Event handle korar 2ta way dehksi first hocche inline handling(inline handling a tag ba element er bitore attribute(onclick,onmouseover, etc) ke use kore  hocche amra event handle kortam) and second way hocche javascript  er moddhe node(element) ke use kore protekta event er jonno kono ekta function er through event handle korte parmu

//second way te ekbar e amra ekta function ke likhe event handle korte partam tar cheya o better hoye hocche event listner

//javascript er moddhe hocche event listeners jeita ase eita always listen kore jokhon e kono event ashe thokon eia execute kore

//syntax of Event listner ----> 
// node.addEventListener(event,callback)




let btn1 = document.querySelector("#btn");

btn1.addEventListener("click", (event) => {

    console.log("button1 was clicked");
    console.log(event); //event object ke access korte pari
    console.log(event.type); //event ki type er eita ke o call korte pari
});
btn1.addEventListener("click", () => {

    console.log("button1 was clicked- handler2");
});
////tai eventlistener maddome same event e multiple kaj korte pari eita hocche benifit tai amra eventlistener use kori 
// jeita hocche amra jodi normally (node.event = function)diyea kaj korte chai tahole hocche amra multiple event korle just last er ta trigger korbe ager gula ke overwrite korbe part-2 te dehksilam 



// btn1.addEventListener("click", () => {

//     console.log("button1 was clicked- handler3");
// });
btn1.addEventListener("click", () => {

    console.log("button1 was clicked- handler4");
});
//jei vabe event listner add kori oi vabe remove o korte pari 
//node.removeEventListener(event,callback)
// Note:the callback reference should be same to remove


// btn1.removeEventListener("click", () => {
//     console.log("button1 was clicked-handler3")
// })
// btn1.addEventListener("click", () => {

//     console.log("button1 was clicked- handler3");
// });


//eikahen 2ta function er console same hoyar mane ei nah je 2ta same function 2ta alada function 2ta kaj just same kinto jokhon hocche remove korte hobe function e thokon hocche ////the callback refernce should be same to remove

////ei 2ta function hocche memory te alada alada jaiga create kore nise ekon remove jonno hocche amra eita ke hocche ekta same function name diyea disi handler3 ekon hocche jokon amra eikhane.......... ....................btn1.addEventListener("click",handler3);                   handler3 kotha boltesi thokon o same function ke refer kotha boli jokhon                                      btn1.removeEventListener("click", handler3);......... eikhane boli thokon same function ke refer kortese tai thkono delete hobe
//basically value by reference er concept use hocche


let handler3 = () => {
    console.log("button1 was clicked- handler3");
}
btn1.addEventListener("click", handler3);
btn1.removeEventListener("click", handler3);


//eibar dehkmo je button3 hocche r nai remove hoye gese eivabe hocche handler function ke remove korte parmu



////Next--practiseEventlistener part-3