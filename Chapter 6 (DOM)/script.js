//DOM
alert("Hello World");

//class = .
//id = #

console.log(window.document.body);

console.log(document.body.style.background = "yellow");


let head = document.getElementById("heading");
console.dir(head);



//can access html elements by [tag name, id name, class name]
let res = document.getElementsByClassName("heading");
console.dir(res);
console.log(res);


let ok = document.getElementsByTagName("p");
console.log(ok);


//query selector
let ele = document.querySelector("p"); // returns first element
console.dir(ele);
// console.log(ele);


let every = document.querySelectorAll("p"); // returns all element
console.dir(every);




// DOM tree [parent, child, sibling]


// assignment read about firstchild, lastchild ------ dom text, comment, element



let did = document.querySelector("div");
console.dir(did);


let head1 = document.querySelector("h1");
console.dir(head1);



// textContent = returns even if text is hidden
