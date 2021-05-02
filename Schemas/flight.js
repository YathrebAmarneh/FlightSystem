const mongoose = require('mongoose')

const FlightSchema = new mongoose.Schema(
    {
        Flight_number: { type: String },
        Airline: { type: String },
        Weekdays: { type: String },
    }, { collection: 'flight' }
)

module.exports = mongoose.model('flight', FlightSchema)