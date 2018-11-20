const Sequelize = require('sequelize')
const db = require('../db')
const Nurse = require('./nuse')
const JobMatch = require('./jobMatch')
const { calcDistance } = require('../../helperFuncs')

const Job = db.define('job', {
  zip: {
    type: Sequelize.STRING,
    allowNull: false
  },
  specialty: {
    type: Sequelize.STRING
  },
  link: {
    type: Sequelize.STRING
  }
})

Job.prototype.createMatches = function() {
  return Nurse.findAll({
    where:
      { specialty: this.specialty }
  })
    .then(nurses => {
      nurses.forEach(async nurse => {
        if (calcDistance(nurse, this)) {
          await JobMatch.create({
            jobId: this.id,
            nurseId: nurse.id
          })
        }
      })
      return this
    })
}

module.exports = Job
