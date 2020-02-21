let data = {}

var path = require('path')
//require envirement variables
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require('aylien_textapi')
const bodyParser = require('body-parser')

const textApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

//to test getData and postData with jest within endPointsApi.test.js
let testData = {}

app.get('/get%test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/post%test', function (req, res) {
    res.send(testData)
})

app.post('/post%test', (req, res) => {
    const url = req.body.url
    testData = {
        ...testData,
        url
    }
})
/*****************************/

const _updateData = (newData) => {
    return new Promise((res, rej) => {
        data = {
            ...data,
            ...newData
        }
        res({
            ...data
        })
    })
}

app.post('/', (req, res) => {
    const url = req.body.url
    data = {
        ...data,
        url
    }

})

app.get('*', (req, res) => {

    textApi.sentiment({
        'url': data.url
    }, function (err, result) {
        if (!err) {

            _updateData({
                ...data,
                polarity: result.polarity,
                subjectivity: result.subjectivity

            })

        }
        textApi.extract({
            'url': data.url
        }, function (err, result) {
            if (!err) {
                _updateData({
                    ...data,
                    title: result.title,
                    article: result.article,
                    author: result.author,

                })

            }
            res.send(data)
        })
    })

})

const port = 3030
// designates what port the app will listen to for incoming requests
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})



//https://www.huffpost.com/entry/us-immigration-system-citizenship_n_5e20ce5dc5b6321176104d65

//https://www.huffpost.com/entry/best-black-hair-politics_n_5e17776ac5b650c621db4360

//https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

//https://classroom.udacity.com/nanodegrees/nd0011-ent/syllabus/core-curriculum

//https://en.wikipedia.org/wiki/Incubator_(culture)