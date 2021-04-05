
let logging = require("./logging.js");
let obj = require("readline-sync");

debugger;

let fname = obj.question("enter the firstname: ");
let lname = obj.question("enter the lastname: ");
let gender = obj.question("Male or Female: ");
let email = obj.question("enter the email id: ");

let obj1 = {
    firstname: fname,
    lastname: lname,
    gender: gender,
    email: email,
    time: Date().toString()
}

console.log("entered details", obj1);

logging.jsonLogging(obj1);
