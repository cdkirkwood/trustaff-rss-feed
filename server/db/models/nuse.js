const Sequelize = require('sequelize')
const db = require('../db')

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
})

module.exports = Nurse
