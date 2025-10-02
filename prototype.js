//(A javascript object is an entity having property and behaviour(properties and method) )
const student = {
    fullname: "Mustafiz",
    marks: 50.5,
    printMarks: function(){
        console.log("marks = ", this.marks) //student.marks bujaitese
    }
};

//(js objects have a special property called prototype)

const employee = {
    //1st way to define function in object 
    calcTax() {
        console.log("tax rate is 10%");
    },
    //2nd way to define function in object 
    calctax2 : function() {
        console.log("tax rate is 10%");
    }
}

const karanArjun1 = {
    salary : 50000,
}
const karanArjun2 = {
    salary : 50000,
}
const karanArjun3 = {
    salary : 50000,
}
const karanArjun4 = {
    salary : 50000,
}
//(we can set prototype using __proto__)

//protekta object er prototype er bitore amra assign korte parbo employee class er function gula
karanArjun1.__proto__= employee
karanArjun2.__proto__= employee
karanArjun3.__proto__= employee
karanArjun4.__proto__= employee  //karanArjun4.calcTax();


//prototype hocche 2type er thakbe hoy reference to an object or either Null(prototype er bitore notun kono kicho access hoy nai default vabe jeiprototype thake object e oigulai ase)

//reference to an object mane bujaitese----->amar kase 2ta object ase ekta employee r ekta karanarjun ekon ami prototype use karanarjun er bitore employee object niyea ashci orthat karaarjun object access korte partese employee ke

//(if object & prototype have same method, object's method will be used)
//eikhane object er bitore calcTax() ase tar prototype employee er moddhe o calcTax() ase ei khetre always use hobe object er method mane nijer ta karanarjun5 er calcTax() output eitar ashbe 
const karanArjun5 = {
    salary : 50000,
    calcTax(){
        console.log("tax rate is 20%");
    }
}

karanArjun5.__proto__ = employee;


//This is all about prototype in javascript
//---Next classes