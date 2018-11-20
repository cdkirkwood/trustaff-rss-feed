const Nurse = require('./nuse')
const Job = require('./job')

Nurse.belongsToMany(Job, {through: 'jobMatch'})
Job.belongsToMany(Nurse, {through: 'jobMatch'})

module.exports = { Nurse, Job }
