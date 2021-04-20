import { validateUrl } from '../src/client/js/urlValidator'

function expectTrue(testDescription, url) {
    test(testDescription, () => {
        expect(validateUrl(url)).toBeTruthy()
    })
}

function expectFalse(testDescription, url) {
    test(testDescription, () => {
        expect(validateUrl(url)).toBeFalsy()
    })
}

expectTrue('url with http', 'http://www.example.com')
expectTrue('url with https', 'https://www.example.com')
expectTrue('url with ftp', 'ftp://www.example.com')
expectTrue('url without scheme', 'www.example.com')

test('url with invalid scheme', () => {
    expect(validateUrl('://www.example.com')).toBeFalsy()
    expect(validateUrl('//www.example.com')).toBeFalsy()
    expect(validateUrl(':/www.example.com')).toBeFalsy()
    expect(validateUrl('abc://www.example.com')).toBeFalsy()
    expect(validateUrl('ftps://www.example.com')).toBeFalsy()
})

expectTrue('url with port', 'www.example.com:443')
expectTrue('url with general path', 'www.example.com/path/to/service')
expectTrue('url with path to file', 'www.example.com/path/to/myfile.html')
expectTrue('url with parameters', 'www.example.com?key1=value1&key2=value2')
expectTrue('url with anchor', 'www.example.com#SomewhereInTheDocument')
expectTrue('complete url', 'https://www.example.com:443/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument')