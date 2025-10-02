
//constructor hocche kono ekta object initialization er somoi use kori 

//jokhone kono object create kori thokon  automatically constructor eita execute hoye jabe without calling a constructor
class Toyotacar{
    // constructor(){
    //     console.log("creating a new object");
    // }

    //amra chaile constructor er moddhe parameter o pass korte pari
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;

    }
    start() {
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
}
//toyotacar blueprint theke hocche ei object ready hoyse
let BMW = new Toyotacar("BMW",100); //constructor
console.log(BMW);
let Audi = new Toyotacar(); //constructor
console.log(Audi);
let fortuner = new Toyotacar("fortuner",100);
console.log(fortuner);

//amra jokhon initialization er somoi kono kaj korte hoy jokhon object create hoy oi time kono kaj korte chaile oi kaj amader jono constructor kore dei


//----->Next topic(inheritance)