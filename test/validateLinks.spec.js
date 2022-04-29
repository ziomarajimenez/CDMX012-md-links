const validateLinks = require('../validateLinks');
const axios = require('axios');

jest.mock('axios');

describe('validateLinks', () => {
    const links = [{
        href: 'https://es.wikipedia.org/wiki/Markdown11',
        text: 'Markdown',
        file: 'docs\\fileOne.md'
        },
        {
        href: 'https://nodejs.org/1234556',
        text: 'Node.js',
        file: 'docs\\fileOne.md'
        }
        ]

    const result =  [{
        href: 'https://es.wikipedia.org/wiki/Markdown11',
        text: 'Markdown',
        file: 'docs\\fileOne.md',
        status: '200',
        ok: 'ok'
        },
        {
        href: 'https://nodejs.org/1234556',
        text: 'Node.js',
        file: 'docs\\fileOne.md',
        status: '200',
        ok: 'ok'
        },
        ]

        const result2 =  [{
            href: 'https://es.wikipedia.org/wiki/Markdown11',
            text: 'Markdown',
            file: 'docs\\fileOne.md',
            status: '404',
            ok: 'fail'
            },
            {
            href: 'https://nodejs.org/1234556',
            text: 'Node.js',
            file: 'docs\\fileOne.md',
            status: '400',
            ok: 'fail'
            },
            ]

        axios.get.mockImplementation(() => Promise.resolve({ ok: "ok", status: "200" }));

    test('should return an array of objects with the keys: href, text, file, status and ok', () => {
        return validateLinks(links).then((res) => {
            expect(res).toEqual(result);
        })
    });
    test('should return an array of objects with the keys: href, text, file, status and ok', () => {
        return validateLinks(links).catch((res) => {
            axios.get.mockImplementation(() => Promise.resolve({ ok: "fail", status: "404" }));
            expect(res).toEqual(result1);
        })
    });
})
