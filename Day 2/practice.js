// practice question 1

// to check if the number is multiple of 5 or not
let userInput = prompt("Enter a number: ");

if (userInput%5 === 0)
{
    console.log(userInput, "It is a multiple of 5.")
}
else
{
    console.log(userInput, "It is not a multiple of 5.")
}



// practice question 2
// grade
let userInput2 = prompt("Enter your score to convert into grades; ");

if (userInput >= 90 && userInput <= 100){
    console.log("Your Grade is A.")
}else if (userInput >= 70 && userInput <= 89){
    console.log("Your Grade is B.")
}else if (userInput >= 60 && userInput <= 69){
    console.log("Your Grade is C.")
}else if (userInput >= 50 && userInput <= 59){
    console.log("Your Grade is D.")
}else if (userInput >= 0 && userInput <= 49){
    console.log("Your Grade is F.")
}