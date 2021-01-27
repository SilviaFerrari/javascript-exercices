const fs = require("fs") 
const util = require("util")

const readFileP = util.promisify(fs.readFile)
const writeFileP = util.promisify(fs.writeFile)

const p = readFileP("./package.json")
p.then((data) => {
    console.log(data.toString())
    return readFileP(".test.txt")
})
.then((data) => {
    console.log(data.toString())
})
.catch(err => {
    console.log(err)
})

console.log(p)
