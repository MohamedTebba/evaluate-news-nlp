import {getData, postData} from './endPointsApi'

test('get method test', () => {
    expect.assertions(1)

    return getData('http://localhost:8085/get%test')
      .then((res) => {
          expect(res).toEqual({
            'title': 'test json response',
            'message': 'this is a message',
            'time': 'now'
          })
      })
})


test('post method test', () => {
    const url = `https://www.huffpost.com/entry/us-immigration-system-citizenship_n_5e20ce5dc5b6321176104d65`
    
     postData('http://localhost:8085/post%test', {url})

     return getData('http://localhost:8085/post%test')
        .then((res) => {
            expect(res).toEqual({
                "url": "https://www.huffpost.com/entry/us-immigration-system-citizenship_n_5e20ce5dc5b6321176104d65"
            })
        })    
    
})