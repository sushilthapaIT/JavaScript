// // classes and object
// // js objects have a special property called prototype
// const student = {
//     fname: "sush",
//     marks: 99.99,
//     printMark: function () {
//         console.log("marks", this.marks); // this. meaning - we are talking about student 
//     }
// };


// let arr =['apple', 'banana', 'mango'];


// const employee = {
//     calcTax() {
//         console.log("tax is 10%");
//     },
// };

// const kaarj = {
//     salary: 50000,
// };

// kaarj.__proto__ = employee;




// // // classes


// class ToyotaCar{
//     start(){
//         console.log("Start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand, year){
//         this.brandName = brand;
//         this.year = year;
//     }
// }


// let fort = new ToyotaCar();
// fort.setBrand("fortuner", 1999);
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus", 1909);



// // constructor
//// use of constructor - initializes object
// class ToyotaCar{
//     constructor(brand, milage) {
//         console.log("Creating new object")
//         this.brand = brand;
//         this.milage = milage;
//     }

//     start(){
//         console.log("Start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand, year){
//         this.brandName = brand;
//         this.year = year;
//     }
// }


// let fort = new ToyotaCar("Lambo", 22);
// console.log(fort);
// let lexus = new ToyotaCar("lexus", 20);
// console.log(lexus);



// // inheritance in JS

 // // passing down properties and methods from parent class to child class

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }


// class Child extends Parent{}

// let obj = new Child();



// class Person {

//     constructor(species){
//         this.species = "homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }


// class Engineer extends Person{
//     work(){
//         console.log("build something")
//     }
// }

// let shraddha = new Engineer();
// let p1 = new Person();



// // super keyword

class Person {

    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }

    eat(){
        console.log("eat");
    }

}


class Engineer extends Person{
    constructor(name){
        super(name); // to invoke parent class constructor // to access function from parents we have to use super(function name or parameter);
        // this.branch = branch;
    }
    work(){
        console.log("build something");
    }
}

let engObj = new Engineer("Chemical Engineer");
