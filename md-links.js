const validatePath = require("./validatePath");
const getMdFiles = require("./mdFiles");
const getLinks = require("./getLinks");
const validateLinks = require("./validateLinks");

const mdLinks = (path, validate = false) => new Promise(function (resolve, reject) {
    if(validatePath(path)){
        let arrayFiles = getMdFiles(path);
        let links = getLinks(arrayFiles);
        
        if(links.length>0){
            if(validate){
                let requestsLinks = validateLinks(links)
                resolve(requestsLinks)
            } 
            resolve(links)
        } else {
            reject('No links were found');
        }
    } else{
        reject('Path not found');
    }
})

    
module.exports = mdLinks;
