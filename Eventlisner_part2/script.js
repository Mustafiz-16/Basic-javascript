////Event object --->hocche ek doroner special object hoi jar  kase  event er sob details thake (like eita ki dorone event eita mouseevent, pointerevent, keyboardevent jei type er event hoy eita type ki)


////Event object

//node.event = (e) => { //handle here }  e-->hocche ekta event object

let newcl= document.querySelector(".niceclass");

// let get = newcl.onclick = function (e) {
//     console.log(e);
//     console.log("handler");
// };
// console.log(get);


// newcl.onclick = function (e) {
//     console.log("handler");
//     console.log(e);
// }


//arrow function 
newcl.onclick = (event) => {
    console.log("handler");
    console.log(event); //event er moddhe je object ase oita ashe
    console.log(event.type); //event ta ki type er eita ashe
    console.log(event.target); //event ashole kon element theke trigger hoyse eita bole
    console.log(event.clientX, event.clientY); //cursor ta kon dhike ase browser er
}
let newdiv= document.querySelector(".newdiv");
newdiv.onmouseover = (event) => {
    console.log("your are inside the second div");
    console.log(event);
    console.log(event.type);
     console.log(event.target);
}


//event object er moddhe onekgula event ase amra generally hocche type r target beshi use kori r jodi kono develop kori r oita position er upor depend kore thokon hocche clientX, clientY eigula use kormu

//ei vabe hocche we can get additional information about the event itself though our event object

////Next topic-->Event listeners