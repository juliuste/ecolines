'use strict'

const stations = require('./stations')
const regions = require('./regions')
const stopovers = require('./stopovers')
const currencies = require('./currencies').currencies
const journeys = require('./journeys')
const legDetails = require('./legDetails')

module.exports = {stations, regions, stopovers, currencies, journeys, legDetails}
