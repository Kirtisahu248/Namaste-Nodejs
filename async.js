//These https,crypto and fs are the core node modules we can also write it like  require("node:fs") or require("node:https")
const fs = require("fs");
const https = require("https")

console.log("Hello World");

var a = 1078698;
var b = 20986

// Synchronous - for a 10ms/1ms it will block the main thread
fs.readFileSync("./file.txt", "utf8"); // 10 ms
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully");
  });


setTimeout(()=>{
    console.log("set timeout will be called after 3 sec")
},3000);

//async function
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data : ", data);
  });
function multiply(x,y){
    const result = x * y;
    return result;
}
const c = multiply(a,b);

console.log("Multiplication result is: "+ c);