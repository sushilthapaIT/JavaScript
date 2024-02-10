// 1

// let app = document.querySelector("h2");
// console.dir(app.innerText);
// app.innerText = app.innerText + " from Apna College students";


// 2

let divs =document.querySelectorAll(".box");
// console.dir(q2);
// q2[0].innerText = "new UNIQUE value 1";
// q2[1].innerText = "new UNIQUE value 2";
// q2[2].innerText = "new UNIQUE value 3";

// console.log(q2[0]);
// console.log(q2[1]);
// console.log(q2[2]);

// // using for each loop
let index = 1;
for(div of divs){
    console.log(div.innerText = `new unique value ${index}`);
    index ++;
}