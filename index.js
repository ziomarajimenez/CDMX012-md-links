// module.exports = () => {
//   // ...
// };

const validatePath = require("./validatePath");
const getMdFile = require("./mdFiles");
const readFile = require("./readFile");

const mdLinks = (path) => {
    if(validatePath(path)){
        console.log('Valid path')
        // getMdFile(path);
        for (file of getMdFile(path)){
            console.log(file);
            readFile(file);
        }
    } else{
        console.log('Path not found');
    }
}

//mdLinks("./validatePath.js");
mdLinks("./docs");