const mongoose = require('mongoose')

const airplane = new mongoose.Schema(
    {
        Airplane_id: { type: Number },
        Total_number_of_seats: { type: Number },
        Airplane_type: { type: String },


    }, { collection: 'airplane' }
)

module.exports = mongoose.model('airplane', airplane);