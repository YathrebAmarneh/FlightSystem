const mongoose = require('mongoose')

const seatreseRvation = new mongoose.Schema(
    {
        Flight_number: { type: String },
        Leg_number: { type: Number },
        Date: { type: Date },
        Seat_number: { type: String },
        Customer_name: { type: String },
        Customer_phone: { type: String },
        Fare_code: { type: String },
        Amount: { type: String },
    }, { collection: 'seat_reservation' }
)

module.exports = mongoose.model('seat_reservation', seatreseRvation)