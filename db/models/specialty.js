const Sequelize = require('sequelize')
const db = require('../db')

const Specialty = db.define('specialty', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Specialty
