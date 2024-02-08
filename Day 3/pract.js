// practice loop

// 1
//to print even number from 1-100

for (let i = 1; i<=100; i++){
    
    if (i%2 === 0){
        console.log("The even number between 1 to 100 are:",i);
    }

} 


//2
 
let ranNum = 5;
let userInput = prompt("Welcome to guessing game\nEnter number between [1-10]\nEnter your Number: ")

while (ranNum != userInput){
    userInput = prompt("You Entered Wrong Number\nWelcome to guessing game\nEnter number between [1-10]\nEnter your Number: ")
}
console.log("Wow, You guessed correct number!!");
