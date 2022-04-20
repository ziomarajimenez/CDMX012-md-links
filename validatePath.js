const path = require('path');
const fs = require('fs');

const resolvePath = (userPath) => {
    const isPathAbsolute = path.isAbsolute(userPath);
    if (isPathAbsolute) {
      return userPath
    } 
    else { 
        return path.resolve(userPath);
    }
  };

  const verifyIfPathExists = (userPath) => {
    const absolutePath = resolvePath(userPath)
    if (fs.existsSync(absolutePath)) {
        return true;
    } else {
        return false;
    }
};

module.exports = verifyIfPathExists; 

// verifyIfPathExists("../holamundo.js");
// verifyIfPathExists("C:/Users/kevin/Documents/GitHub");
// verifyIfPathExists("C:\Users\kevin\Documents\GitHub");
