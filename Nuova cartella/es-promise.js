  
const fs = require("fs")
const util = require("util")

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)

let t1,t2,t3;

Promise.all([ 
	t1 = read("./1.txt","utf8"),
	t2 = read("./2.txt","utf8"),
	t3 = read("./3.txt","utf8")
])
.then((data)=>{
	write("./4.txt", data.join(" "))
})