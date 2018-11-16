const axios = require('axios')
const parseString = require('xml2js').parseString

const testRssLink = async() => {
  const response = await axios.get('http://rss.trustaff.com')
  parseString(response.data, (err, result) => {
    if (err) console.error(err)
    console.log(result.rss.channel[0].item[0])
  })
}

testRssLink()
  .then((data) => console.log('done'))
  .catch((error) => console.log(error))
