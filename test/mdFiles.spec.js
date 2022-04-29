const getMdFiles = require('../mdFiles');

describe('getMdFiles', () => {
    test('Should return an array with the relative given path', () => {
        const relativePath = './docs/fileOne.md'
        expect(getMdFiles(relativePath)).toEqual(["docs\\fileOne.md"]);
    });
    test('Should return an array with the relative given path', () => {
        const relativePath = './docs/'
        const arrayMd = [
            'docs\\fileOne.md',
            'docs\\fileTwo.md',
            'docs\\moreDocs\\docs4testing\\fileFive.md',
            'docs\\moreDocs\\docs4testing\\fileSix.md',
            'docs\\moreDocs\\fileFour.md',
            'docs\\moreDocs\\fileTest.md'
          ]
        expect(getMdFiles(relativePath)).toEqual(arrayMd);
    });
})