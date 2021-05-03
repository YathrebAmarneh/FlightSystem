const mongoose = require('mongoose')

const flightLeg = new mongoose.Schema(
    {
        Flight_number: { type: String },
        Leg_number: { type: Number },
        Departure_airport_code: { type: String },
        Scheduled_departure_time: { type: String },
        Arrival_airport_code: { type: String },
        Scheduled_arrival_time: { type: String },


    }, { collection: 'flight_leg' }
)

module.exports = mongoose.model('flight_leg', flightLeg)