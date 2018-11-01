const XLSX = require('xlsx')
const db = require('../db')
const { Nurse }  = require('../db/models')

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

const seed = async () => {
  await db.sync({ force: true })
  console.log('db synced!')
  const sheet = XLSX.readFile('./Pipeline.xlsx').Sheets.Sheet1
  const rows = +sheet['!ref'].slice(4)
  let chain = Promise.resolve()
  for (let i = 2; i <= rows; i++) {
    const nurse = new NurseClass(i, sheet)
    chain = chain.then(() => {
      return Nurse.create(nurse)
        .then(() => 'nothing')
    })
  }
  return chain.then(() => {
    console.log('seed complete')
  })
}

seed()
  .then(() => {
    db.close()
    console.log('db connection closed')
  })
  .catch(err => {
    console.error(err.message)
    process.exitCode = 1
  })
