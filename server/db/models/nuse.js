const Sequelize = require('sequelize')
const db = require('../db')
const Job = require('./job')
const JobMatch = require('./jobMatch')
const { calcDistance } = require('../../helperFuncs')

const Nurse = db.define('nurse', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  specialty: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.STRING
  },
  distance: {
    type: Sequelize.INTEGER
  },
  shiftType: {
    type: Sequelize.STRING
  },
  startDate: {
    type: Sequelize.STRING
  },
  rate: {
    type: Sequelize.INTEGER
  },
  notes: {
    type: Sequelize.STRING
  }
}, {
    scopes: {
      jobs: {
        include: [
          { model: Job }
        ]
      }
    }
  })

Nurse.prototype.createMatches = function () {
  return Job.findAll({
    where:
      { specialty: this.specialty }
  })
    .then(jobs => {
      jobs.forEach(async job => {
        if (calcDistance(this, job)) {
          await JobMatch.findOrCreate({
            where: {
              jobId: job.id,
              nurseId: this.id
            }
          })
          this.jobs.push(job)
        }
      })
      return this
    })
}

module.exports = Nurse
