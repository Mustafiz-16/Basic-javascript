// Falsy value-> false Condition(5==3, 5!=7, 5>40, 40<5), false, 0, null, Nan, Undefined
// Truthy values -> everything except falsy values

if(undefined){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy
if(0.7){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy
if(5>150){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy
if(5==150){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy
if(5!=150){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy
if(false){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy
if(null){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy

//eikhane eita soman dehke else condition e gese jodi soman nah hoto tahole if condition er ta print hoitho
if(5!=5){
    console.log("true");
}
else{
    console.log("false");
}


// jekono type er text amar truthy value hoy -> "hello", "0",'h'
if('null'){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy
if("null"){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy
if('0'){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy
if('h'){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy








// eita  error ashbe....error ta hobe reference error(JavaScript e ReferenceError hoy jokhon tumi ekta variable ba function use korte chao, kintu oita declare hoy nai.)
// if(good){
//     console.log("Hello"); //truthy
// }
// else console.log("mello"); //falsy


// console.log(good);  //Reffernce error ashbe jehthu defined kori nai 
console.log(typeof(good)); //eita error ashbe nah karon hocche good er type ashebe jethu ami eita define kori nai pora code e tai undefined ashbe






// javascript empty string hocche falsy value ashbe
if(''){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy
if(""){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy






//jekono real number jodi diyea dey except 0 eita truth consider hobe-> 40,4.5,8.5,0.7,1
if(1){
    console.log("Hello"); //truthy
}
else console.log("mello"); //falsy

