//variables means-> hold the data->
//var, let, const- keywords
//var- global scope, funtion scope
//let- block scope/script scope
//const- block scope/ script scope, cannot be re-assigned

let age1 = 25;
var name1 = "uday";
const FIRST_NAME = "Uday";



// first name -> firstName -cmaelCase
// name, first -> name ="Uday" first ="Kiran";
// console.log(name);
// console.log(age);
// console.log(PI);

//Data types -> number , string, boolean, null, undefined, objects

'use strict';
let age = 254;
let marks = 76.9;

// let name = "Uday";
let isMarried = false;
let isCity = null;

isCity = 26;
console.log(isCity);
let isCity = "pune";

console.log(age);
console.log(isCity);

//object
var student={
    name:"Uday",
    age:29,
    city:"pune",
    isPass:true
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.isPass);