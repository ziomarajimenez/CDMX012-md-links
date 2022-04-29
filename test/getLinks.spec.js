const getLinks = require('../getLinks');
// const fs = require("fs");

describe('getLinks', () => {
  const array = [
    {
      href: "https://es.wikipedia.org/wiki/Markdown11",
      text: "Markdown",
      file: "./docs/fileOne.md"
    },
    {
      href: "https://nodejs.org/1234556",
      text: 'Node.js',
      file: "./docs/fileOne.md",
    },
    {
      href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jp",
      text: 'md-links',
      file: "./docs/fileOne.md",
    } 
  ] 
  test('should return an array with three objects', () => {
    const result = getLinks('./docs/fileOne.md');
    expect(result.length === 3).toEqual(array.length===3);
  });
  test('should return an array with three objects containing href, text and file', () => {
    const result = getLinks(['./docs/fileOne.md']);
    expect(result).toEqual(array);
  });
});
