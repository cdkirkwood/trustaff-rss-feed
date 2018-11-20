const zipcodes = require('zipcodes')
const geolib = require('geolib')

const calcDistanc = (nurse, job) => {
  if (!job.zip.length) return false
  const nurseCoords = zipcodes.lookup(nurse.zip)
  const jobCoords = zipcodes.lookup(job.zip)
  const distance = geolib.getDistance(
    { latitude: nurseCoords.latitude, longitude: nurseCoords.longitude },
    { latitude: jobCoords.latitude, longitude: jobCoords.longitude }
  )
  const miles = distance / 1609.344
  return miles <= nurse.distance
}

module.exports = calcDistanc
