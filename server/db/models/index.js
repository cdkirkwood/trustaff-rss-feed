const Nurse = require('./nurse')
const Job = require('./job')
const JobMatch = require('./jobMatch')

Nurse.belongsToMany(Job, {through: JobMatch})
Job.belongsToMany(Nurse, {through: JobMatch})

module.exports = { Nurse, Job, JobMatch }
