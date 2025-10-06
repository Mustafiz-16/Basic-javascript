let btn1 = document.querySelector(".btn1");
flag = 0;
btn1.addEventListener("click",() => {
    if(flag==0){
    // btn1.body.style.backgroundColor = "dark";
    document.querySelector("body").style.backgroundColor="black";
    console.log("dark color");
    flag = 1;
    }
    else{
    // btn1.body.style.backgroundColor="light";
        document.querySelector("body").style.backgroundColor="white";
        console.log("light mode")
        flag=0;
    }
});

