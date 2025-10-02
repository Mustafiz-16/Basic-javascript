//async await >> promise chains >> callback hell
//callback hell theke better hocche promises chains r promises chains theke better hocche async await


//synchronous--> synchronous means the code runs in a particular sequence of instructions given in the program.Each instructions waits for the previous instruction to complete its execution

//synchronous
console.log("one");
console.log("two");
console.log("three");


//Asynchronous--->Due to synchronous programming, something imp instruction get blocked due to some previous instructions, which causes a delay in the UI. ////Asynchronous code execution allows to execute next instructins immmediately and doesn't block the flow

//3 sec por execute hoitase
setTimeout(function (){
    console.log("hello");
},3*1000)

//2 sec por execute hoitase
function h(){
    console.log("hi")
}
setTimeout(h,2000); //timeout 2sec = 2000ms

//4 sec por execute hobe
setTimeout(() => {
    console.log("ohhhhhhhayyaaaayyyohhh");
}, 4*1000);

//eigula settime out er jonno wait korbe nah ethokon like je 2sec,3sec,4sec eigula execute por nicher gula execute hobe eikhane eita hobe nah... eigula age execute hoye jabe settimeout ta parallal hoye toh cholte thakbe jokhon settimeout time complete hobe oita execute hobe nijer moto...ei  jinish ta hocche Asynchronous
console.log("one");
console.log("one");
console.log("one");
console.log("one");
console.log("one");
console.log("one");


//simple hocche settime out er jonno code wait korbe nah je like eita sesh hoile amra execute kormu eirokam nah.. code bolbe je tumi parallel settimeout cholte thakuk ami age giyea baki code normally execute kore dei erpor settimeout tumar jokhon time sesh hobe thokon tumi execute hoyo ami tumar laiga ethokon boisha thakmu nah and this is called Asynchronous programming


//Next Topic--->callbacks