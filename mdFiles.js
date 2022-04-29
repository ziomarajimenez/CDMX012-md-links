const path = require('path');
const fs = require('fs');

const getMdFiles = (Userpath) => {
  let mdFiles = [];
  let isDir = fs.lstatSync(Userpath).isDirectory();
  let pathExt = path.extname(Userpath);
  let filePath;

  if(isDir){
    const files = fs.readdirSync(Userpath); 
    for (const file of files){
      filePath = path.join(Userpath, file)
      let pathExt = path.extname(file);
      if(pathExt === '.md'){
        mdFiles.push(filePath);
      }
      if(fs.lstatSync(filePath).isDirectory()){
          mdFiles.push(...getMdFiles(filePath));
      }
    }
  } else {
    filePath = path.join(Userpath)
    if (pathExt === '.md'){
      mdFiles.push(filePath);
    } 
  }
  return(mdFiles);
}; 

module.exports = getMdFiles; 

