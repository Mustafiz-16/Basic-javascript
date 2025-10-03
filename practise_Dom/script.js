
// let header = document.getElementsByClassName("header");
// console.log(header);
// header[0].innerText = "Nice to meet You"; 



let header = document.querySelector(".header");
console.log(header);
// header.innerText = header.innerText + " Nice to meet you " //concat
header.innerText = `Hello Javascript! ${"Nice to meet you"}`;



let divs = document.querySelectorAll(".box")
console.log(divs);
// setTimeout(() => {
//     divs[0].innerText = "Ghante ka Badshah";
//     divs[1].innerText = "Bullshit party";
//     divs[2].innerText = "Akkha Bollyowood Ek Taraf Emraan Hashmi Ek taraf";
// }, 5 * 1000);

let idx = 1;
for(div of divs) {
    div.innerText = `new unique value of ${idx}`;
    idx++;
}



// setTimeout(() => {
//     divs[0].innerText = "Ghante ka Badshah";
//     divs[2].innerText = "Akkha Bollyowood Ek Taraf Emraan Hashmi Ek taraf";
// }, 5 * 1000);

// setTimeout(() => {
//     divs[1].innerText = "Bullshit party";
// }, 4*1000);
