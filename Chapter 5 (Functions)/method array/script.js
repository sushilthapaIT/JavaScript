function welcome() {
    console.log("Welcome to my program\n--------------------------")
}

function myFunc(welcome){
    return welcome;
}


let arr = [1,2,3,4,5,6];

arr.forEach(function printVal(val, i ) {
    console.log(val, i, arr);
});


let arr = [2,3,1,3,5,6,7,8,9,7]

arr.forEach((val) => {
    console.log(`square of ${val} = ${val*val}`);
});



// map function
// return new array 

let arrs = [2,3,1,3,5,6,7,8,9,7]
arrs.map((val) => {
    return
});


// filter array method

let naw = [ 1,2,3,4,5,6,7,7,8,9,0];

let naya = naw.filter((val) => {
    return val%2 == 0;
});

console.log(naya);


// reduce array method

let okn  = [2,3,4,5,6,7,8,9];

let outp = okn.reduce((res, curr) => {
    return res + curr;
})

console.log(outp);


q1
let marks = [22,98,97,87,99,89];

let filMarks = marks.filter((val) => {
    return val > 90;
})

console.log(filMarks);

// q2
let userInput = prompt("Enter how many number of list you want to create: ");
let newArray = [];

    for (let i = 0; i < userInput; i++){
        let inp = prompt(`Enter ${i+1} number: `);
        newArray.push(Number(inp));
        let integerValue = parseInt(newArray);
    }
    console.log(newArray);

let sumArray = newArray.reduce((prev, curr) => {
    return prev + curr;
});



const productArray = newArray.reduce((prev, curr) => {
    return prev * curr;
});

console.log(sumArray);
console.log(productArray);