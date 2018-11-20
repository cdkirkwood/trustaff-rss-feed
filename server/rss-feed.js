const axios = require('axios')
const parseString = require('xml2js').parseString
const db = require('./db')
const { Job } = require('./db/models')

const testRssLink = async () => {
  const response = await axios.get('http://rss.trustaff.com')
  parseString(response.data, async (err, result) => {
    if (err) console.error(err)
    const jobs = result.rss.channel[0].item.reverse().slice(0, 3000)
    console.log(jobs[0])
    await Promise.all([...jobs].map(job => {
      const { JobRequestID, Zip, SpecialtyName, JobURL } = job
      return Job.findOrCreate({
        where: {
          id: JobRequestID[0]
        },
        defaults: {
          id: JobRequestID[0],
          zip: Zip[0].slice(0, 5),
          specialty: SpecialtyName[0],
          link: JobURL[0]
        }
      })
    }))
  })
}

db.sync({ force: true })
  .then(() => testRssLink())
  .then((jobs) => {
    console.log('done', jobs)
  })
  .catch((error) => console.log(error))
