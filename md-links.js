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

const argv = process.argv;
const totalLinks =  (array) =>{
    return  array.length;
  }
  
  const  uniqueLinks = (array) => {
    let unique = new Set (array.map((obj) => obj.href)).size;
    return unique;
  }
  
  const  brokenLinks = (array) => {
    let bkn = 0;
        for(let obj of array) {
          if(obj.ok !== 'ok'){
              bkn += 1;  
          }};
    return bkn;
  }

const main = (args) => {
    const userPath = args[2].toString();

    const validate = args.includes('--validate');
    const stats = args.includes('--stats');
    

    const verifyMdLinks = mdLinks(userPath, validate);
    verifyMdLinks.then(data => {
        const total = totalLinks(data);
        const unique = uniqueLinks(data);
        const broken = brokenLinks(data)
    if (validate && stats){
        console.log("Total: " +total + "\n" + "Unique: " + unique + "\n" + "Broken: " + broken)
    } else if (stats) {
        console.log("Total: " +total + "\n" + "Unique: " + unique)
    } else if(!validate){
        data.forEach(obj => {console.log(`${obj.file} ${obj.href.slice(0,50)} ${obj.text}`)})
    }else if(validate){
        data.forEach(obj => {console.log(`${obj.file} ${obj.href.slice(0,50)} ${obj.ok} ${obj.status} ${obj.text}`)})
    }
    else {
        console.log('Please choose a valid option: --validate, --stats or both');
    }
}).catch(error =>{
    console.log(error)
})
};

main(argv);


//mdLinks("./validatePath.js");
//mdLinks("C:/Users/kevin/Desktop/laboratoria/CDMX012-data-lovers/README.md")


    // const userOptions = {};
    // if( args.includes('--validate') && args.includes('--stats')){
    //     userOptions.bothOptions = true
    //     userOptions.validate = false
    //     userOptions.stats = true
    // } else if (args.includes('--validate')){
    //     userOptions.bothOptions = false
    //     userOptions.validate = true
    //     userOptions.stats = false
    // } else if (args.includes('--stats')){
    //     userOptions.bothOptions = false
    //     userOptions.validate = false
    //     userOptions.stats = true
    // }
    