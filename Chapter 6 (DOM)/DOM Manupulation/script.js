// ATTRIBUTES

let div = document.querySelector("div");
console.dir(div);

let id = div.getAttribute("id");
console.log(id);


let nam = div.getAttribute("name");
console.log(nam);

let okp = document.querySelector("p");

let i = okp.setAttribute("class", "changed"); // change class name setAttribute // to see the class name getAttribute
console.log(i);


style
let divv = document.querySelector("div");
// console.dir(divv.style);

divv.style.backgroundColor = ("yellow");


// add new element

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!!!";
console.log(newBtn);