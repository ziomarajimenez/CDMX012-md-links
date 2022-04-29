const mdLinks = require('../md-links');
//const mock = require('mock-fs');

describe('mdLinks', () => {
    test('should be a function', () => {
    expect(typeof (mdLinks)).toBe('function');
});

    test('should return Path not found', () => {
        const path = './docs1';
        const options = {
        validate: false,
        };
        return mdLinks(path, options).catch((err) => {
    expect(err).toEqual('Path not found');
        });
    });
    test('should return No links were found', () => {
        const path = './docs/fileTest.md';
        const options = {
            validate: false,
        };
        return mdLinks(path, options).catch((err) => {
    expect(err).toEqual('No links were found');
        });
    });
    test('should return an array of objects', () => {
        const path = './docs/moreDocs/docs4testing/fileFive.md';
        const options = {
            validate: true,
        };

        const arrayObj = [{
            href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
            text: 'Objetos en JavaScript',
            file: 'docs\\moreDocs\\docs4testing\\fileFive.md',
            status: 200,
            ok: 'ok'
        },
        {
            href: 'https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops',
            text: 'Estructuras condicionales y repetitivas',
            file: 'docs\\moreDocs\\docs4testing\\fileFive.md',
            status: 200,
            ok: 'ok'
        },
        {
            href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals',
            text: 'Tomando decisiones en tu código — condicionales - MDN',
            file: 'docs\\moreDocs\\docs4testing\\fileFive.md',
            status: 200,
            ok: 'ok'
        }
        ]
        return mdLinks(path, options).then((data) => {
    expect(data).toEqual(arrayObj);
        });
    });
})