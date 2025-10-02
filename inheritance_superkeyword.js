//khokhono child class theke parent class er constructor direct access korte hoy er jonno super keyword use kori

//super keyword--->the super keyword is used to call the constructor of its parent class to access the parent's properties and methods.


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
    constructor(branch){
        console.log("Enter child constructor");
        super(); //to invoke parent class constructor
        //this use korar age amader super constructor call korte hobe
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("solve problems,build something")
    }
}


let engobj = new Engineer("chemical Engg")
// console.log(engobj); //super keywork er maddoheme parent & child constructor access korte pari


// first e child constructor execute hobe then super keyword er karone parent e giyea parent constructor execute korbe then hocche child aisha super() niche  bakigula execute korbe






//passes value from child to parent throug the super keyword
class person1{
    constructor(name){
        this.species ="Homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer1 extends person1 {
    constructor(name) {
        // super() //undefined because didn't pass name variable
        super(name) //to invoke parent class constructor
    }
    work(){
        // eat (); //error ashbe karon directly parent class ke amra access korte parmu nah eivabe tar jonno super keyword through access kori
        super.eat();
        console.log("solve problems, build something");
    }
}

let engobj1 = new Engineer1("fizz");

//Engineer1 eitar bitor toh name ase ekon jodi amra name value ta ke parent constructor pass korte hoy tahole amader super er moddhe name variable  pass korte hobe


//chile class ke jodi parent class e kono important information pass korte hoy thokon super keyword dorkar 

console.log(engobj1.work());