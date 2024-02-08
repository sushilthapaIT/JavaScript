// loop
//for loop
//while loop
//do while loop

/// initialize     
// for (let i = 1;    i <= 50;     i++)
// {
//     console.log("Ana college"); // executed 5 times
// }

// console.log("Loop has ended.")


// calculate sum of 1 to n
// let sum = 0;
// for(let i = 1; i <=5; i++){
//     sum += i;
//     // console.log(sum);
// }
// console.log(sum);


// while loop

// let i = 1;
// while (i<=5){
//     console.log("Sushil", i);
//     i++
// }



// do while
// let i = 20;
// do{
//     console.log("Our College");
//     i++;
// }
// while (i<=10);


// let i =1;
// do{
//     console.log(i);
//     i++;
// }while (i <= 5);



// for of (strings and arrays)
// for of loop

let stri = "Lambton College";

for( let i of stri){
    console.log()
}


// for in loop return key 

let student = {
    namee: "Sushil",
    cgps: 9,
    isPass: true,
    classe: 12
};

for(let key in student){
    console.log(key, student[key]);
}