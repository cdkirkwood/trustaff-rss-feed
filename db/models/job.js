const Sequelize = require('sequelize')
const db = require('../db')

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

module.exports = Job
