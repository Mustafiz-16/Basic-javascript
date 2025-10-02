// let today = new Date();
// console.log("Full month:", today);

// JS Date Formats

// 👉 Date object diye tarikh & time handle kora jay.

// new Date() → current date & time dei

// toDateString() → human readable date (e.g., "Mon Sep 16 2025")

// toISOString() → ISO standard format (e.g., 2025-09-16T16:40:00Z)

// toLocaleDateString() → local format (Bangladesh e → dd/mm/yyyy)

// toUTCString() → UTC format

// Custom get methods:

// getFullYear() → year

// getMonth() (0-11)

// getDate() → day of month

// getDay() → week er din (0 = Sunday)

// getHours(), getMinutes(), getSeconds()

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());

console.log();

console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());

console.log();

console.log(mydate.toLocaleTimeString());
console.log(mydate.toTimeString());

console.log();

console.log(mydate.toDateString());
console.log(typeof mydate);


// let mycreatedDate = new Date(2003, 3, 16); //0--> january
// console.log(mycreatedDate.toDateString());

//let myCreatedDate = new Date(2003, 3, 16,5,3,12);
// console.log(myCreatedDate.toLocaleString());

let mycreatedDate = new Date("2003-03-16");
console.log(mycreatedDate.toDateString());
console.log(mycreatedDate.toLocaleString());

console.log();
//Timestammp
let mytimestamp = Date.now();
console.log(mytimestamp);
let myCreatedDate = new Date(2003, 3, 16,5,3,12);
console.log(myCreatedDate.getTime()); //milisecond e ashe
console.log(Math.floor(Date.now()/1000)); //second e ashbe



let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
   weekday:"long",

})