// //synchronous and asynchronous
// //synchronous-->run after executing previous line of code
// //asynchronous-->

// function hello(){
//     console.log("Hello World");
// }

// console.log("one");
// console.log("two");

// setTimeout( () => {
//     console.log("hello") },4000); //timeout

// console.log("three");
// console.log("four");



// // // callback-->a callback is a function passed as an argument to another function
// function sum(a, b){
//     console.log(a+b);
// }

// function calc(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calc(1,2, sum);



// //
// function getData(dataId, getNextData){
//     setTimeout(() => {
//        console.log("data", dataId);
//        if ( getNextData){
//         getNextData();
//        }
//     }, 2000);
// }


// //callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });


// // data 1
// // data 2
// // data 3



// // Promises(to avoid/solve callback hell)
// // 3 states in promise: pending, fulfilled, rejected

// let promise = new Promise ((resolve, reject) => {
//     console.log("i am a promise");
//     // resolve(123);
//     reject("some error occured!!");
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("data", dataId);
//         resolve("success");
//     if (getNextData){
//         getNextData();
//     }
//     }, 5000);
//     });
// }



// let promise = new Promise((resolve, reject) => {
//     console.log("I am promise");
//     // resolve("success");
//     reject("error");
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             reject("error");
//             if (getNextData){
//                 getNextData();
//             }
//         }, 5000);
//         });
//     }

//     setTimeout(() => {
//        console.log("data", dataId);
//        if ( getNextData){
//         getNextData();
//        }
//     }, 2000);
// }


// let promise = new Promise((resolve, reject) => {
//     console.log("I am promise");
//     // resolve("success");
//     reject("error");
// })


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am promise");
//         resolve("success");
//         // reject("error");
//     });
// };


// let promise = getPromise();
// promise.then((res) => {
//     console.log("full filled", res);
// });


// promise.catch((rej) => {
//     console.log("rejected", rej);
// });



// // promise chain

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 6000);
//     });
// }

// console.log("fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data 2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//     console.log(res);
// })
// })

// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// })



// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             reject("error");
//             if (getNextData){
//                 getNextData();
//             }
//         }, 5300);
//         });
//     }

// getData(1)
//     .then((res) => { 
//     return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//         })
//     .then((res) => {
//         return getData(4);
//     })
//     .then((res) => {
//         console.log(res);
//     });
    
// // async function always return promise
// async function hello() {
//     console.log("hello")
// }


function api(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

// async function getWeatherData() {
//     await api();
//     await api();
// }


// // async-wait

async function getAllData() {
    await api(1);
    await api(2);
    await api (3);
}