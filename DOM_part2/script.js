//DoM Manipulation 

//attributes--> amra elements er bitore jokhon extra information dei seita hocche attributes

//getAttribute(attr) //to get the Attribute value
//setAttribute(attr,value) //to set the attribute val


//jodi kono div er jonno er attribute value ke get korte hoy tahole oi node er jonno getAttribute ke call korte parmu erpor je attribute(attr) er valur dorkar oi attribute ke pass korte parmu
let div =document.querySelector("div");
console.log(div);
let id= div.getAttribute("id");
console.log(id);

let n= div.getAttribute("name");
console.log(n);


let p =document.querySelector("p");
console.log(p);
let c= p.getAttribute("class");
console.log(c);

//get attribute diyea hocche kono ekta element er attribute er value access korte pari



////set Attpribute diyea hocche amra kono attribute er value change korte pamu 
//setAttribute(attr,value)


let div1 = document.querySelector("div")
console.log(div);
let change = div1.setAttribute("id","bottle")
console.log(change);




let para =document.querySelector("p");
console.log(para);
let a_change= para.setAttribute("class","Newparagraph");
console.log(a_change);


//html e gele hocche setAttribute er changes ta dehkte parmu


//style

//style.node


let div2 = document.querySelector("div");
console.log(div);
console.log(div.style); //ekta object ashbe jeita te sob style hobe inline style(style="background-color: red;") er object ashbe

div.style.backgroundColor="purple";
div.style.fontSize = "25px";
// div.style.visibility="hidden"; //element chole jabe screen theke



//style,attribute(getattribute,setattribute),text(innerText,innerHtml,tagName,textContent), sobkicho ekon javascript er maddhome change kora possible

//Access, Changes kivabe korte hobe eita pore felsi ekon Next topic New element add korte chaile kemne kormu eita dehkmu


////Next topic--->Insert Elements,Delete Elements