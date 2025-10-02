let x = document.getElementById("ele1");
x.addEventListener("click", function () {
    x.innerHTML = "jiggypuff";
    x.style.color = "yellow";
    x.style.backgroundColor = "Red";
})
x.addEventListener("mouseleave", function () {
    x.innerHTML = "jiggypuff";
    x.style.color = "black";
    x.style.backgroundColor = "white";
})
//mousemove,mouseenter,mouseleave
let y = document.getElementById("ele2");
y.addEventListener("mouseenter", function () {
    // y.innerHTML = "jiggypuff";
    y.style.color = "blue";
    y.style.backgroundColor = "orange";
})
y.addEventListener("mouseleave", function () {
    // y.innerHTML = "jiggypuff";
    y.style.color = "black";
    y.style.backgroundColor = "white";
})


let z = document.getElementById("ele3");
y.addEventListener("click", function () {
    // y.innerHTML = "jiggypuff";
    z.style.color = "blue";
    z.style.backgroundColor = "purple";
})

//Mewtwo te click korle pickachu change hobe likha ashbe Bulb
z.addEventListener("click", function () {
    // y.innerHTML = "jiggypuff";
    x.style.color = "blue";
    x.style.backgroundColor = "green";
    x.innerHTML ="Bulbasaur";
})