//4 pillar of DOM
// 1.selection of DOM
// 2.changing HTML
// 3.changing CSS
// 4. Event Listener



//console
// console.log('hello bhai');
// let a = 6;
// console.log(a*a);

//Element selector


// let x = document.querySelector("h3");
// console.log(x);

// let x = document.querySelectorAll("h1");
// console.log(x);

// let x = document.querySelectorAll(".yes");
// console.log(x);

// let x = document.querySelectorAll("#No");
// console.log(x);



//change HTML and CSS

// let x = document.querySelectorAll(".yes");
// x.forEach(element => {
//     element.style.color ="red";
//     console.log(element);
// });



// let x = document.querySelector("h5");
// x.innerHTML = "changed html";
// x.style.color = "red";
// x.style.backgroundColor="blue";
// console.log(x);

// document.querySelector("h5").innerHTML = "vai log";


//Even Listener---> jodi ami element click kori, othoba hover kori, element theke mouse bahire nei tahole kicho change hobe

let x = document.querySelector("h1");

x.style.color = "Red";
x.addEventListener("click", function () {
    // console.log("hey how are you")
    x.innerHTML = "i changed myself because of you";
    x.style.color = "blue";
    x.style.backgroundColor = "Yellow";

});

//simple example of bulb or whatever clicking on the same button (Even listener)

let bulb = document.querySelector("#bulb")
let btn = document.querySelector("button")

let flag = 0;

btn.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow";
        console.log("clicked");
        flag = 1;
    }
    else {
        bulb.style.backgroundColor = "transparent";
        console.log("Again clicked");
        flag = 0;

    }

})


//Multiple events

//selecting multiple elements at a same time

let  h = document.querySelectorAll("h2");
// console.log(h);

h.forEach(function(element){
    console.log(element);
})

//getelementbyid, getelementbyclassName, innerhtml, textcontent

document.getElementById("box1");  //id kuija ber korbe
document.getElementsByClassName("box");

// let y = document.querySelector("#box2");
// y.innerHTML = "hi";

// let box = document.querySelector("#box2");
// box.innerHTML = "<h1>hi</h1>";
// box.textContent = "<h1>hi</h1>";



//set Timeout
let y = document.querySelector("#box2");
setTimeout(function(){
    y.innerHTML = "how are you";
},2000) //code exactly run hoyar 2 sec pore eita cholbe 

let z = document.getElementsByClassName("box");
setTimeout(function(){
    z[0].style.color = "green";
    z[0].style.fontFamily = "Gill Sans";
},4000)



