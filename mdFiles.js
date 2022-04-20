const path = require('path');
const fs = require('fs');

const getMdFiles = (Userpath) => {
  let mdFiles = [];
  // let isDir = fs.existsSync(Userpath) && fs.lstatSync(Userpath).isDirectory();
  let isDir = fs.lstatSync(Userpath).isDirectory();
  let pathExt = path.extname(Userpath);
  // const fileName = path.basename(Userpath);
  let filePath;

  if(isDir){
  const files = fs.readdirSync(Userpath); //Array with all the files
   for (const file of files){
    filePath = path.join(Userpath, file)
    console.log(filePath);
    let pathExt = path.extname(file);
     if(pathExt === '.md'){
      mdFiles.push(filePath);
        }
    }
  } else {
    filePath = path.join(Userpath)
    console.log(filePath);
    if (pathExt === '.md'){
      mdFiles.push(filePath);
    } else {
      console.log("The path doesn't contain any .md files to read")
    }
  }
 return mdFiles;
}; 

//getMdFiles('./docs');
getMdFiles("./docs/moreDocs");

module.exports = getMdFiles;

  //getMdFile("./docs");

  
// const getMdFile = (Userpath) => {
//   let stats = fs.statSync(Userpath);
//   const isDirectory = stats.isDirectory();
//   console.log(isDirectory);
//   const files = fs.readdirSync(Userpath);
//   let mdFiles = [];

// for (const file of files){
//   let pathExt = path.extname(file);
//   console.log(pathExt);
//   if(isDirectory){
//     if(pathExt === '.md'){
//       mdFiles.push(file);
//     }
//   } else  {
//   mdFiles.push(pathExt);
//   console.log("it is a file", pathExt);
// }
// } 
// console.log(mdFiles);
// };

//getMdFile("./validatePath.js")
//  getMdFile("./docs");

