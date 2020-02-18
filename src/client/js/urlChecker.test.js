import {checkForUrl} from './urlChecker'

test('should be an URL', () => {

    const url = 'https://www.huffpost.com/entry/us-immigration-system-citizenship_n_5e20ce5dc5b6321176104d65'

    expect(checkForUrl(url)).toBeTruthy()
})

test(" must be falsy when it is not an URL or a non valid URL", () => {

    const invalidURL = 'htt9ps://www.huffpost.com/entry/us-immigration-system-citizenship_n_5e20ce5dc5b6321176104d65'

    expect(checkForUrl(invalidURL)).toBeFalsy()
})
