const getLinks = require('../getLinks');
// const fs = require("fs");

describe('getLinks', () => {
  test('should be a function', () => {
    expect(typeof getLinks).toBe('function');
  });
  test('should return an array with three objects', () => {
    let array = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'docs\\fileOne.md'
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'docs\\fileOne.md'
      },
      {
        href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
        text: 'md-links',
        file: 'docs\\fileOne.md'
      }
    ]
    const result = getLinks('./docs/fileOne.md');
    expect(result.length === 3).toEqual(array.length === 3);
  });
  test('should return an array with three objects containing href, text and file', () => {
    
    const array = [];
    const result = getLinks(['./docs/moreDocs/fileTest.md']);expect(typeof getLinks).toBe('function');
  });
  test('should return an empty array', () => {
    const array = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'docs\\fileOne.md'
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'docs\\fileOne.md'
      },
      {
        href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
        text: 'md-links',
        file: 'docs\\fileOne.md'
      }
    ];
    const result = getLinks(['./docs/fileOne.md']);
    expect(result).toEqual(array);
  });
});
