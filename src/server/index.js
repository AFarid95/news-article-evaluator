const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const axios = require('axios')

dotenv.config()

const app = express()

app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/text-api', function (req, res) {

    const textApiUrl = process.env.API_URL
        + '?key=' + process.env.API_KEY
        + '&lang=auto'
        + '&url=' + req.query.url

    const textApiRequestHeader = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    axios.post(textApiUrl, {}, textApiRequestHeader)
        .then((textApiResponse) => {
            res.send(textApiResponse.data)
        })
        .catch((error) => {
            res.status(500).send()
        })
})

// designates what port the app will listen to for incoming requests
app.listen(process.env.NODE_PORT, function () {
    console.log('Example app listening on port ' + process.env.NODE_PORT + '!')
})