const URL = "https://catfact.ninja/facts";
const factpara = document.querySelector("#fact");

const btn = document.querySelector("#btn");


////async-await
const getrandomcatfacts = async () => {
    console.log("getting data....")
    let response = await fetch(URL)
    console.log(response);

    let data = await response.json()
    console.log(data);
    factpara.innerText = data.data[9].fact

}

btn.addEventListener("click", getrandomcatfacts);

//eivabe hocche api ke call kori get fetch api  r fetch api amader jonno kicho data niyea ashe but readable format e thake nah thai eita ke redable korte .json method ke call kori then .json method eitake redable banai jeita hocche amra use korte pari use korar mane hocche amra eita ke kono html element test korte pari like innerhtml othoba innertext e dehkaite pari r eivabe hocche API kaj kore javascript er moddhe.
//ei je kaj ta amra async-await er maddhome korsi eita ekon Promise chain er maddhome o korte pari.


////promise chain

// function getrandomcatfacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             factpara.innerText = data.data[9].fact
//         })
// }

// btn.addEventListener("click", getrandomcatfacts);


//so amra ekon 2ta code dehkle bujte parmu je async-await code much easy then promise chain


////so this is all about api 


////more topic about api that was Request & Response

////NExt topic ---->Request & Response