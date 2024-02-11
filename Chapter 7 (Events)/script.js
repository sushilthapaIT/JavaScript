// // main priority is given to js file rather than inline js
// // override the event if same code is written twice


// let btn1 = document.querySelector('#btn1');

// btn1.onclick = () => {
//     console.log("button was clicked");
//     let a = 23;
//     a++;
//     console.log(a);
// }


// let box = document.querySelector("div");

// box.onmouseover = () => {
//     console.log("overrr");
// }


// // event object
// // type/target


// let box = document.querySelector("div");

// box.onmouseover = (evt) => {
//     console.log(evt.type); // // to know the event type
// }



// // event listner

// let btn = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("button clicked");
// })


////assignment

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