//inheritance is passing down properties & methods from parent class to child class

//child class jokhon parent class ke access korte chai thokon (extend) keyword use kore



class Parent{
    hello(){
        console.log("hello");
    }
}
class Child extends Parent {}

let obj = new Child();


//parent class
class person{
    //we try to create a constructor under a child method
    constructor(){
        console.log("Enter parent constructor");
        this.species ="Homo sapiens"
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("do Nothing");
    }
}
//child class(derived class)
class Engineer extends person {
    work(){
        console.log("solve problems,build something")
    }
}
//child class(derived class)
class Doctor extends person {
    work(){
        console.log("treat patients");
    }
}
let fizzobj = new Engineer();
// console.log(fizzobj);
// console.log(fizzobj.work())

//jodi amader child class r parent class er same obj thake tahole amader child class er object execute korbe
//if child & parent have same method, child's method will be used [Method Overriding]


let p1 = new person();
// console.log(p1)



