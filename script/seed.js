const XLSX = require('xlsx')
const db = require('../server/db')
const { Nurse } = require('../server/db/models')

class NurseClass {
  constructor(rowNum, sheet) {
    this.name = sheet['A' + rowNum].v
    this.specialty = sheet['B' + rowNum].v
    this.city = sheet['C' + rowNum].v
    this.state = sheet['D' + rowNum].v
    this.zip = sheet['E' + rowNum].v
    this.distance = sheet['F' + rowNum].v
    this.shiftType = sheet['G' + rowNum].v
    this.startDate = sheet['H' + rowNum].v
    this.rate = sheet['I' + rowNum].v
    this.notes = sheet['J' + rowNum] ? sheet['J' + rowNum].v : null
  }
}

const seedNurses = async () => {
  const sheet = XLSX.readFile('./server/Pipeline.xlsx').Sheets.Sheet1
  const rows = +sheet['!ref'].slice(4)
  const rowsArr = new Array(rows + 1).fill(null)
  let chain = Promise.resolve([])
  await rowsArr.reduce((promise, value, index) => {
    if (index < 2) return promise
    const nurse = new NurseClass(index, sheet)
    return promise.then(() => Nurse.create(nurse))
  }, chain)
  return chain.then(() => {
    console.log('seed complete')
  })
}

db.sync()
  .then(seedNurses)
  .then(() => {
    db.close()
    console.log('db connection closed')
  })
  .catch(err => {
    console.error(err.message)
    process.exitCode = 1
  })
