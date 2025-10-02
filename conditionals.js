//problem -> Write a JavaScript program to check whether a person is eligible to vote.
let age =24;
if (age>= 18) console.log("Can vote");
else console.log("cannot vote");

//problem -> Write a JavaScript program to check whether a given number is even or odd.

let num =2;
if(num%2==0)
{
    console.log("Even")
}
else{
    console.log("odd")
}

//problem -> Write a JavaScript program that takes a numeric rating (from 1 to 5) and prints the performance based on the following scale:
//5 -> poor
//4 -> Below Average 
//3 -> Average
//2 -> Good
//1 -> Excellent

let rating =5
if(rating == 1)
{
    console.log("Excellent");
    
}
else if(rating == 2)
{
    console.log("Good");
    
}
else if(rating == 3)
{
    console.log("Average");
    
}
else if(rating == 4)
{
    console.log("Below Average");
    
}
else
{
    console.log("poor");
    
}


//problem-> Write a program in JavaScript that checks whether a given number is a 3-digit number.
x=1000
if( x >= 100 && x <= 999)
    console.log("3 digit Number");
else
console.log("Not a 3 digit Number");


//Ternary operator syntax -> 
// condition? value if True : value if false




