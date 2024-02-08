// practice loop

// 1
//to print even number from 1-100

for (let i = 1; i<=100; i++){
    
    if (i%2 === 0){
        console.log("The even number between 1 to 100 are:",i);
    }

} 


//2
// random guessing number
let ranNum = 5;
let userInput = prompt("Welcome to guessing game\nEnter number between [1-10]\nEnter your Number: ")

while (ranNum != userInput){
    userInput = prompt("You Entered Wrong Number\nWelcome to guessing game\nEnter number between [1-10]\nEnter your Number: ")
}
console.log("Wow, You guessed correct number!!");



// string

let naam = "Sushil Thapa from nepal";

console.log(naam.length)

console.log(naam[4])


// template literals

let specialString = `this is template literal`;

console.log(specialString);


let obj = {
    item: "personalbr",
    price: 20,
}

console.log(`The cost of ${obj.item} is ${obj.price}`);




// string methods in js

let nam1 = "            SuShIl THApa";
let nam = " hello";
console.log(nam.toUpperCase());
console.log(nam.toLowerCase());
console.log(nam.trim());
console.log(nam.slice(3,7));
console.log(nam.concat(nam1));

console.log(nam);


// 3

let userInp = prompt("Enter your full name: ");
let user1 = "@";

op = user1.concat(userInp);
len = userInp.length;

console.log(op+len);