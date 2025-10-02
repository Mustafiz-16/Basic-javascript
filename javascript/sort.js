let arr = [1,9,2,7,4,5,6,2,8];
console.log(arr);

arr = arr.sort();  //Ascending order e ashse
console.log(arr);

//custom sort  korte parbo chaile Ascending order ke descending e nite parbo

arr = arr.sort(function(a,b){
    return b-a; //decresing order e sort
});
console.log(arr);

arr = arr.sort((a,b) => {
    return b-a; //decresing order e sort
});
console.log(arr);
//shortcut
arr = arr.sort((a,b) => b-a);
console.log(arr);






//js er built in function  vul sorting dei jodi negative data element e thake tahole 
let a = [1,-9,-2,7];
console.log(a);
// a = a.sort(); //vul sorting dei 
// console.log(a);
// a = a.sort((a,b) => a-b); //right sorting dibe (increasing order) proper
// console.log(a);



//  a =  a.sort(function(a,b){
//     return Math.abs(a)-Math.abs(b);  //without sign type er sorting
// });
// console.log(a);




console.log(a.reverse());
