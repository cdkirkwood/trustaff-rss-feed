const Express = require('express')
const morgan = require('morgan')
const app = Express()
const axios = require('axios')

app.use(morgan('dev'))

const testRssLink = async() => {
  const response = await axios.get('http://rss.trustaff.com')
  parseString(response.data, (err, result) => {
    if (err) console.error(err)
    console.log(result.rss.channel[0].item[157])
  })
}

testRssLink()
  .then((data) => console.log('done'))
  .catch((error) => console.log(error))