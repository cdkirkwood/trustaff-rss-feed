const Nurse = require('./nuse')
const Job = require('./job')
const Specialty = require('./specialty')
const NurseSpecialty = require('./nurseSpecialty')

Nurse.belongsToMany(Specialty, {through: 'nurseSpecialty'})
Specialty.belongsToMany(Nurse, {through: 'nurseSpecialty'})

module.exports = { Nurse, Job, Specialty, NurseSpecialty }
