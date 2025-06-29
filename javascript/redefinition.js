// In this code, the variable 'a' is declared multiple times using 'var' — this is called **Redeclaration**.
// Also, the value of 'a' is changed multiple times — this is called **Redefinition** or **Reassignment**.
// In JavaScript, redeclaring and reassigning variables declared with 'var' in the same scope is allowed.

//  Redeclaration: Declaring the same variable name again. var a = 6; var a = 7;
//  Redefinition (Reassignment): Changing the value of the variable. a = 10; a = 20;
var a= 6;
console.log(a);

var a="mustafiz";
console.log(a);

var a = 8;
console.log(a);


// This code shows an error because 'let' and 'const' do not allow redeclaration or reassignment in the same scope.
// But 'var' allows redeclaration, so no error occurs with 'var'.


//This part show the error
//Redeclaration
// let b =3;
// console.log(b);
// let b =4
// console.log(b);


// This part is Executed 
//Reassignment
let b =4;
console.log(b);
b= 4
console.log(b);