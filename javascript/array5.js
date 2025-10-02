func2(10, 20, 30, 40, 50);

// function func2(a,...ar){
//     console.log(a,ar)
// }

function func2(a, ...ar) {
    let sum = a;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    console.log(sum);
}



//... function parameter e → rest operator, baki arguments array te collect kore

//... array ke pass korar somoy → spread operator, array ke individual arguments e split kore


const p = [1,2,3,4,5,6];
const q = [...p];

q.push(7);

console.log({p,q});

const arrowfunction = (a,b) => console.log(a+b);
