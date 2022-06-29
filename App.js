// const fs = require('fs');

// fs.writeFileSync("hello.txt", "this was created by node js")

// fs.appendFileSync("hello.txt"," and the code is in javaScript")

// const add = require("./utils.js");

// const sum = add(4 , 3)
 

// console.log(sum);

const getNotes = require('./notes');


const todo = getNotes()

console.log(todo);