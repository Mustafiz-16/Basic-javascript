let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color="white"


document.querySelector("body").prepend(btn);
console.log(btn);


// let create = document.createAttribute("newclass")
let access = document.querySelector("p");


// let change = access.getAttribute("class");
// let change = access.setAttribute("class","newclass");
// console.log(change);



// let change = access.classList;
let change = access.classList.add("newclass");
// let change = access.classList.remove("content");

console.log(change);
console.log(access.classList);


//use classList to add multiple class in our element
//eivabe multiple class append korte pari amader class e


