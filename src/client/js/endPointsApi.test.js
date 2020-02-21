import {getData, postData} from './endPointsApi'
const request = require('supertest'),
      app = require('../../server/index')

test('get method test', async () => {
    expect.assertions(1)
    await request(app)
    return getData('http://localhost:3030/get%test')
    .then((res) => {
        expect(res).toEqual({
            'title': 'test json response',
            'message': 'this is a message',
            'time': 'now'
        })
    })
})


test('post method test', async () => {
    await request(app)
    const url = `https://www.huffpost.com/entry/us-immigration-system-citizenship_n_5e20ce5dc5b6321176104d65`
    
     postData('http://localhost:3030/post%test', {url})

     return getData('http://localhost:3030/post%test')
        .then((res) => {
            expect(res).toEqual({
                "url": "https://www.huffpost.com/entry/us-immigration-system-citizenship_n_5e20ce5dc5b6321176104d65"
            })
        })    
    
})
