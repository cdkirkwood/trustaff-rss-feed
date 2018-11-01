const Express = require('express')
const morgan = require('morgan')
const app = Express()
const axios = require('axios')
const fs = require('fs')
const XLSX = require('xlsx')

app.use(morgan('dev'))

const testRssLink = async() => {
  const response = await axios.get('http://rss.trustaff.com')
  parseString(response.data, (err, result) => {
    if (err) console.error(err)
    console.log(result.rss.channel[0].item[157])
  })
}

// testRssLink()
//   .then((data) => console.log('done'))
//   .catch((error) => console.log(error))

const testExcelDoc = () => {
  const sheet = XLSX.readFile('./Pipeline.xlsx').Sheets.Sheet1
  const rows = +sheet['!ref'].slice(4)
  const nurses = []
  for (let i = 2; i <= rows; i++) {
    const nurse = {}
    nurse.name = sheet['A' + i].v
    nurse.specialty = sheet['B' + i].v
    nurse.city = sheet['C' + i].v
    nurse.state = sheet['D' + i].v
    nurse.zip = sheet['E' + i].v
    nurse.distance = sheet['F' + i].v
    nurse.shiftType = sheet['G' + i].v
    nurse.startDate = sheet['H' + i].v
    nurse.rate = sheet['I' + i].v
    nurse.notes = sheet['J' + i] ? sheet['J' + i].v : null
    nurses.push(nurse)
  }
  console.log(nurses)
}

testExcelDoc()