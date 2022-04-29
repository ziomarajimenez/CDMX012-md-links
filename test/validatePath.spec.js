const resolvePath = require('../validatePath');
const verifyIfPathExists = require('../validatePath');

// const fs = require("fs");

describe('resolvePath', () => {
    test('Should return false', () => {
        const absolutePath = 'C:\Users\kevin\Documents\GitHub\CDMX012-social-network\src\img'
        expect(resolvePath (absolutePath)).toBe(false);
    });
    test('Should return false', () => {
        const relativePath= './docs'
        expect(resolvePath (relativePath)).toBe(true);
    });
})

describe('verifyIfPathExists', () => {
    test('should return false', () => {
        const absolutePath = 'C:\Users\kevin\Documents\GitHub\CDMX012-social-network\src\img'
        expect(verifyIfPathExists(absolutePath)).toBe(false);
    });
    test('should return true', () => {
        const absolutePath = './docs'
        expect(verifyIfPathExists(absolutePath)).toBe(true);
    });

})