// Arrays in JS
// collection of items

let marksStudent1 = 97;
let marksStudent2 = 97;
let marksStudent3 = 97;
let marksStudent4 = 97;
let marksStudent5 = 97;
 

let naam = [1,2,3,4,5];

naam[0] = 100;
console.log(naam);
console.log()
console.log(naam.length);


let heros = ["op", "iron man", "thor", "spider man", "super man", "Bat Man"];
heros[1] = "Nepal";
console.log(heros);
//  to access values array[index]
console.log(heros[2] = "nepal");



// loop in array
// for loop
let heroes = ["op", "iron man", "thor", "spider man", "super man", "Bat Man"];
for (let i = 0; i < heroes.length; i++)
{
    console.log(heroes[i]);
}


// for of
for (let element of heroes){
    console.log(element);
}



let cities = ["ktm", "delhi", "otawwa", "sydney"];

for(let city of cities){
    console.log(city);
}


// practice question to find the average of students marks
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
lamo = marks.length;
for (mark of marks){
    sum = sum + mark;
    // console.log(mark+mark);
}

let avrg = sum / lamo;
console.log(avrg);



let prices = [250, 645, 300, 900, 50];

for (price of prices){
    toa = price- ((10/100) * price);
    console.log(toa);
}

for (let i = 0; i < prices.length; i++){
    // toa = prices - ((10/100) * prices);  
    console.log(prices[i] - ((10/100) * prices[i]));
}



// array methods

let foood = ["potato", "apple", "tomato", "banana"];
food.push("chips", "burger", "momo"); // add item from last
console.log(food);

let food = ["potato", "apple", "tomato", "banana"];
console.log(food);
food.pop();
console.log(food.toString());


let food1 = ["potato", "apple", "tomato", "banana"];
let vegg = ["meat", "mutton", "fish", "chicken"]

only = food.concat(vegg);

console.log(only);



let foods = ["potato", "apple", "tomato", "banana"];

valo = foods.unshift("sushi");

console.log(`added ${valo}`);



splice
add, remove, replace

let fooods = ["potato", "apple", "tomato", "banana"];
val = fooods.splice()


let arr = [1,2,3,4,5,6,7];

arr.splice(2,2,101,102);

console.log(arr);



let ars = [1,2,3,4,5,6,7];

ars.splice(3,1)

console.log(ars);


// practice question
let stores = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
stores.splice(0,1);
stores.splice(2,1,"Ola");
stores.push("Amazon");
console.log(stores);