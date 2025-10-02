//class is a program-code template for creating objects
//Those objects will have some state (variables) & some behaviour (functions) inside it

//class
class Toyotacar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    //ei property kaj hocche ei class(Toyotacar) ke use kore jothogulo object hobe sobgula moddhe ei function ta pass hobe argument diyea
    setBrand(brand){
        //object property   //function er moddhe je parameter argument dimu oita
        this.brandName = brand; 
        //this mane each individual object
    }
}
//object syntax----> let myobj = new Myclass();
//object create by class 
let fortuner = new Toyotacar(); //new keyword uses to create object through class
let lexus = new Toyotacar(); //ei line ta mane hocche ei je Toytacar() je class ta ase eitar property or method ja ase tah hocche lexus object aisha store hoye jabe eigula amra use korte parbo




fortuner.setBrand("fortuner");
lexus.setBrand("lexus");



//class thokon prefer kormu jokhon same templete er upor multiple object banano try kormu



//This er use case-------->kono ekta class er method er moddhe jokhon this use kori etia thokon object property hisabe kaj kore

//Next topic--->constructor