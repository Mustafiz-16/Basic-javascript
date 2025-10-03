//propertis gula hocche --> tagname,innertext,innerhtml,textcontent

//tagname --> return tag for elements node
//innertext-->return the text content of the element and all its children
//innerhtml---->
//textcontent--->



//tagname-->je kono element node er tag return kore dei


let title = document.querySelector(".title"); 
console.log(title);
console.log(title.tagName);  //camelCase style


let title1 = document.getElementsByClassName("title");
console.log(title1);
console.log(title1[0].tagName); //eita ki eivabe dite hobe karon eikhane eigula htmlcollection tai eivabe access nite hobe jodi console.log(title1.tagName); dei tahole tagname return korbe nah Error ashbe

let heading = document.getElementById("heading");
console.log(heading);
console.log(heading.tagName);

let h1 = document.querySelectorAll("#heading");
console.log(h1);
console.log(h1[0].tagName);

let title2 = document.querySelectorAll(".title")
console.log(title2);
console.log(title2[1].tagName);

let h2 = document.querySelector("#heading");
console.log(h2);

//basically hocche jokohon htmlcollection(class) r hocche NodeList(queryselectorAll) ashe thokon eivabe dimu console.log(title[].tagName) r baki khetre hocche console.log(title.tagName) dile cholbe.


//innertext

//parent 
//child
//sibling-->tree er moddhe jokhon same level er hoy 

//firstChild-->

//lastChild--->

//children--->

//dom er tree er first e jeita thake eita ke bole first child r jeita last e thake eita ke bole last child 

console.dir(document.body.firstChild); //text node 

// basically body moddhe je first elements ase eita firstChild hisabe ase r  body moddhe jeita ekbare last e ase eitake  last child boli(like script element ekbare last e ase body)

console.dir(document.body.lastChild); //seript 




////jokhon amra DOM tree create kori thokon amader kase 3 type er node thake
////1st--> text nodes
////2nd--->Comment nodes
////3rd---->elements nodes (Dom nodes er moddhe amra ei elements node er upor e kaj kormu)(div,img,p)


//children
console.log(document.querySelector("div"))
console.log(document.querySelector("div").children);  //html er collection ashbe div er moddhe ki ki child ase oita dehka jabe



//basically firstChild, lastChild, children eigula kori hocche navigation er jonno


////innertext-->div er innertext dehkle div er innertext  toh ashbe plus eitar joto children ase eitar innertext o ashbe amader kase 




