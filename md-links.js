const validatePath = require("./validatePath");
const getMdFile = require("./mdFiles");
const readFile = require("./readFile");

const mdLinks = (path) => {
    if(validatePath(path)){
        console.log('Valid path')
        let arrayFiles = getMdFile(path);
        for (file of arrayFiles){
            readFile(file);
        }
    } else{
        console.log('Path not found');
    }
}

//mdLinks("./validatePath.js");
mdLinks("./docs");