// ASSIGNMENT 1

let but = document.createElement("button");
but.innerText = "Click Me";

but.style.color = "white";
but.style.backgroundColor = "red";

document.querySelector("body").prepend(but);


// 2
let para = document.querySelector("p");
para.getAttribute("class");
// para.setAttribute("class", "newClass");


// classList
para.classList.add("newClass");