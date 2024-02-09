// function can be invoked anytime whenever needed

// console.log("Hello World!!!")


// to make function

// function firstFunction(){

// }


// function myFunction(){
//     console.log("Welcome to Lambton College.\nI am learning JS Function.")
// }


// myFunction();
// myFunction();


// function myFunction(msg){ // parameter
//     console.log(msg)
// }


// myFunction("This is Sushil");  // argument
// myFunction("I am Batman");




// function mySum (a, b){
//     console.log(a + b);
// }

// mySum(99, 1);



// function myX(a, b){
//     s = a + b ;
//     return s;
// }

// l = myX(8, 8);

// console.log(l);

// function sum(a, b){
//     return a + b;
// }

// function mul(a, b){
//     return a * b;
// }

// arrow function
// function sum(a, b){
//     return a + b;
// }


// sum function in arrow function
const arrowSum = (a, b) => {
    console.log(a+b);
}

arrowSum(2, 2);


const arrowMul = (a, b) => {
    console.log(a*b);
}

arrowMul(2, 2);


let stri = "Romika".toString().toLowerCase();
// new = stri.
let li = ["a","e","i","o","u"].toString();
let count = 0;
for (let i = 0; i < stri.length; i++){
    if ((li).includes(stri[i])){
        count = count + 1;
    }
    // console.log(li);

    // if (stri[i] === li[i]){

    // }
}

console.log(count);


const incLude = (cout) => {
    let stri = "Romika".toString().toLowerCase();
// new = stri.
    let li = ["a","e","i","o","u"].toString();
    let count = 0;
    for (let i = 0; i < stri.length; i++){
        if ((li).includes(stri[i])){
            count = count + 1;
        }
        // console.log(li);

        // if (stri[i] === li[i]){

        // }
    }
        return count;
    }


result = incLude();

console.log("The numnber of vovwel in Romika is ", result);


function ret(rest){
    let stri = "Romika".toString().toLowerCase();
    // new = stri.
    let li = ["a","e","i","o","u"].toString();
    let count = 0;
    for (let i = 0; i < stri.length; i++){
        if ((li).includes(stri[i])){
            count = count + 1;
        }
        // console.log(li);

        // if (stri[i] === li[i]){

        // }
    }
    return count;
}


result = ret();
console.log(result);