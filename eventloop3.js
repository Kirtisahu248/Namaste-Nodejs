/**
 * Output of the code :
 * last line of the file
 * process.nextTick
 * Promise
 * Timer expired
 * Set Immediate
 * File Reading CB
 * 2nd process.nextTick
 * 2nd set Immediate
 * Timer 2 expired
 */

const fs = require("fs")

setImmediate(()=> console.log("Set Immediate"));
setTimeout(()=>console.log("Timer expired"),0);
Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf-8",()=>{
    setTimeout(()=> console.log("Timer 2 expired"),0);
    process.nextTick(()=> console.log("2nd process.nextTick "));
    setImmediate(()=> console.log("2nd set Immediate"));
    console.log("File Reading CB")
});

process.nextTick(()=> console.log("process.nextTick "));
console.log("last line of the file");