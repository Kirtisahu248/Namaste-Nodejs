const fs = require("fs")

setImmediate(()=> console.log("Set Immediate"));
setTimeout(()=>console.log("Timer expired"),0);
Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Reading CB")
});

process.nextTick(()=> {
    process.nextTick(()=> console.log("inner process.next tick"));
    console.log("process.nextTick ")
});
console.log("last line of the file");