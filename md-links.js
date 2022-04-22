const validatePath = require("./validatePath");
const getMdFiles = require("./mdFiles");
const getLinks = require("./getLinks");

const mdLinks = (path) => {
    const promise = new Promise(function (resolve, reject) {
    if(validatePath(path)){
        let arrayFiles = getMdFiles(path);
        let links = getLinks(arrayFiles);
        if(links.length>0){
        resolve(links);
        } else {
            reject('No links were found');
        }
    } else{
        reject('Path not found');
    }
})
return promise;
}

mdLinks('./docs/fileOne.md').then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})
//mdLinks("./validatePath.js");
//mdLinks("C:/Users/kevin/Desktop/laboratoria/CDMX012-data-lovers/README.md")