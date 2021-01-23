const fs = require("fs")

const risultati = [null, , null]

const ends = () => {
    if(!risultati[0] || !risultati[1] || !risultati[2]){
        return
    }
    console.log(risultati[0] + " " + risultati[1] + " " + risultati[2])
}

fs.readFile("./file1.txt", (err, data) => {
    if(err){
        throw err
    }
    console.log("caricato il primo file")
    const file1 = data.toString()
    risultati[0] = file1
    ends()
})

fs.readFile("./file2.txt", (err, data) => {
    if(err){
        throw err
    }
    console.log("caricato il secondo file")
    const file2 = data.toString()
    risultati[1] = file2
    ends()
})

fs.readFile("./file3.txt", (err, data) => {
    if(err){
        throw err
    }
    console.log("caricato il terzo file")
    const file3 = data.toString()
    risultati[2] = file3
    ends()
})

fs.writeFile('finalFile.txt', ends(), function (err) {
    if (err) throw err;
    console.log('finalFile is created successfully.');
  });
