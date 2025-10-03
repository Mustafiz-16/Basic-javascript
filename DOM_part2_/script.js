//DOM Manipulation


//Insert Elements

//new elements add korar 2ta process first hocche create then hocche add

//create korar jonno syntax hocche --> let elements = document.createElement("div");

let newBtn = document.createElement("button");
newBtn.innerText = "kya hal hea";
console.log(newBtn);
console.log(newBtn.innerText);

//ekon ei btn ta ke Screen e jate ashe add korar jonno amader kase 4ta method ase 

//node.append(elements) //adds at the end of node(inside)
//node.prepend(elements) //adds at the start of node (inside)
//node.before(elements) //adds before the node(outside)
//node.after(elements) //adds after the node (outside)


////node.appends()--->eita hocche ki node jeita ase eitar ekbare last e giyea hocche element add hobe

let div = document.querySelector(".box")
div.append(newBtn)
console.log(div);


////node.prepand()--->eita hocche ki node jeita ase eitar ekbare start e giyea hocche element add korbe

let div1 = document.querySelector(".box")
div.prepend(newBtn)
console.log(div1);


//1st e amader node decide korte hobe jeita  upor base kore amra new elment ke upor niche change kormu


////node.before()-->jodi kono node er just age element add korte hoy orthat bahire just node er age thokon ei keyword use kormu

let div3 = document.querySelector(".box")
div.before(newBtn)
console.log(div3);


//div start hoyar just age hocche btn ta amader add hobe


////node.after()--->node er just bahire jodi element add korte chai thokon eita diyea add kormu


let div4 = document.querySelector(".box")
div.after(newBtn)
console.log(div4);

//div sesh hoyar just pore hocche button ta ashbe


let p = document.querySelector("p")
p.after(newBtn)
console.log(p);

//eibar dehkmo je paragprah epr por hocche div add hoise



let newHeading = document.createElement("h2");
newHeading.innerHTML = "<h2> <b>New Heading </b> </h2>";
document.querySelector("body").prepend(newHeading);

//ei vabe hocche amra dom er moddhe elements ke add korte parmu


//Delete Element 

//node.remove() //remove the node

let para = document.querySelector("p");
console.log(para);
para.remove();


//heading delete korte chaile just eivabe dimu
// newHeading.remove();


////eivabe hocche page er moddhe element ke add delete kora jai

////appenchild(),removechild() dehkte hobe