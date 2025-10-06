//Events ---> The change in the state of an object is known as an event

//Events are fired to notify code of "interesting changes" that may effect code execution

//Mouse events (click, double, click etc)
//keyboard events (keypress, keyup, keydown)
//Form events (submit etc)
//print even & many more


//Event Handling in js  syntax
//node.event = () => {//handle here}

let btn = document.querySelector("#btn1");
btn.onclick = () => {
    console.log("btn was clicked");
    let a = 25;
    a++;
    console.log(a);
}
let newdiv = document.querySelector(".newdiv");
newdiv.onmouseover = () => {
    console.log("your are inside the second div");
}

////Important: jodi amra inline handle kori kono event abar js er moddhe oi same event handle kori tahole run hobe amader javascript e handle kora event

let hello =document.querySelector(".hello");

hello.onclick = () => {
    console.log("I'll see you Next time");
}

//amra jodi multiple handler use kori tahole amader jeita last e thakbe eita hocche execute hoy r ki
//Event object 


hello.onclick = () => {
    console.log("I'll see you Next time Handler 2");
}

////Event object --->hocche ek doroner special object hoi jar  kase  event er sob details thake (like eita ki dorone event eita mouseevent, pointerevent, keyboardevent jei type er event hoy eita type ki)

//It is a special object that has details about the event
//All event handlers have access to the Event object's properties and methods


//node.event = (e) => { //handle here }  e-->hocche ekta event object


/////Next topic-->Event object