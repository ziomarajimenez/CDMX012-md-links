const fs = require("fs");

const getLinks = (paths) => {
    let regex = /\[([^\[]+)\](\(.*\))/gm;
    let singleRegex = /\[([^\[]+)\]\((.*)\)/;
    const result = [];
    for(const path of paths) {
    const readFile = fs.readFileSync(path, 'utf8');
    const links = readFile.match(regex);
        if(links){
            for (let link of links) {
                let text = singleRegex.exec(link)
                result.push({   
                    "href":text[2],
                    "text": text[1],
                    "file":path,
                });
            }
        }
    };
    return result;
}

// console.log(getLinks('./docs/fileOne.md'))
module.exports = getLinks;
