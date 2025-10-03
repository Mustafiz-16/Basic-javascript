////innerText -->text content return kore

let div = document.querySelector("div"); //eikhane div er moddhe joto gula text ase eigula ashbe
console.log(div);
console.log(div.innerText);


////innerHtml--->returns the plain text or HTML contents in the element

console.log(div.innerHTML); //eita o ekta sting print hobe kinto sob tag dehkabe html er 
//tag related html related information o  ashe string er moddhe


//innerText r innerHtml er moddhe differnce hocche-->innerText hocche text ashe pure text ashe r innerHtml e text e ashe kinto sathe html content o ashe



// eihokon toh hocche amra innerText r innerHtml ke get kora dehksi ekon dehkmo set kora
//get(mane check kora) korte parmu, set(mane change,update) korte parmu


let set = document.querySelector(".items");
set.innerText = "apple";


// let set1 = document.querySelector("div");
// setTimeout(function () {
//     set1.innerText = "Flower"
// }, 5 * 1000)

// let set1 = document.querySelector("div");
// div.innerText = "Flower"

//jokoni ami innerText property disi eita sob text change kore dise 

set.innerHTML = "<div>new</div>"

//amra chile dynamically html change korte pari plus hocche Content o change korte pari



//Example----->
let heading =document.querySelector("h1");
console.log(heading);

// heading.innerText ="New Heading"
// heading.innerHTML ="<i>New Heading</i>"


////textContent--> return textual content even for hidden elements


//textContent innerText er motoi kaj kore just eita hocche hidden elements jonno kaj kore


console.log(heading.innerText); //''
console.log(heading.textContent); 


//ei 4ta property(tagName,innerText,innerHtml,textContent) use kori to access our element to change their value 