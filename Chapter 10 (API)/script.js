// // API = APPLICATION PROGAMMING INTERFACE -- END POINT
// // //  response (JSON format)
// // //  we need to convert it into JS object so we use json() method
const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const butt = document.querySelector('#button');


const getFacts = async() => {
    console.log("Getting data......");
    let response = await fetch(URL); // // get requestmeans only getting data not giving data
    console.log(response);
    let data = await response.json(); // making it readable
    console.log(data);
    factPara.innerText = data[0].text;
}


butt.addEventListener("click", getFacts);


// //  request and response