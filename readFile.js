const fs = require("fs");

const readFile = (file) => {
    fs.readFile(file, "utf-8", (err, data) => {
    if (!err){
        console.log(data);
        }
    })
};

//readFile('docs/fileOne.md')
readFile('docs/moreDocs/file.md/file.md')
module.exports = readFile;