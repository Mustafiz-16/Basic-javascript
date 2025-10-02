//You are creating a website for your college.Create a class user with 2 properties, name & email.It also has a method called viewData() that allows user to view website data

let Data = "secret information";
class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewdata(){
        console.log("data =",Data);
    }
}

let studentobj1 = new user("fizz","fizz123@gmail.com");
let studentobj2 = new user("rifat","rifat123@gmail.com");
let studentobj3 = new user("moneem","moneem123@gmail.com");
let studentobj4 = new user("prome","prome123@gmail.com");

let teacher1 = new user("dean","deancollege@gmail.com");


//create a new class called Admin which inherits from User.Add a new method called editData to Admin that allows it to edit website data.

class Admin extends user{
    //ekta jinish mone rakhte hobe jokhon child class er moddhe constructor create kormu thokon parent class er constructor call korte hobe parent constructor call korar jonno hocche super keyword use kormu
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        Data = "some new value";
    }
}

let Adminobj1 = new Admin("admin","admin123@gmail.com");

// console.log(Adminobj1);
// console.log(Data);
// console.log(Adminobj1.editdata());
// console.log(Data);

//------or-----

//Adminobj1
//Data
//Adminobj1.editdata();
//Data


//Next toptic--> Error Handling