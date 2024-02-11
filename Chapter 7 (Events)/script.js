// main priority is given to js file rather than inline js
// override the event if same code is written twice


let btn1 = document.querySelector('#btn1');

btn1.onclick = () => {
    console.log("button was clicked");
    let a = 23;
    a++;
    console.log(a);
}


let box = document.querySelector("div");

box.onmouseover = () => {
    console.log("overrr");
}


// event object
// type/target


let box = document.querySelector("div");

box.onmouseover = (evt) => {
    console.log(evt.type); // // to know the event type
}



// event listner

let btn = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("button clicked");
})


//assignment

let modeBtn = document.querySelector("#mode");
let currMode = "light"; 

modeBtn.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";

    }
    console.log(currMode);
})


let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("Button clicked - handler 1")
})

let btn1 = document.querySelector("#btn1");

btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);

    console.log("btn1 was clicked");
}


const handler3 =() => {
    console.log("button was clicked 3")
};

btn1.addEventListener("click", () => {
    console.log("button was clicked")
})

btn1.addEventListener("click", () => {
    console.log("button was clicked 2")
})

btn1.addEventListener("click", handler3);



btn1.addEventListener("click", () => {
    console.log("button was clicked 4")
})

btn1.removeEventListener("click", handler3);


let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("Your are inside div")
}

let modeB = document.querySelector("#mode");
let currMode = "light";

modeB.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
    }
    else {
        currMode = "light";
    }
});


let modeB = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeB.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currMode);
});