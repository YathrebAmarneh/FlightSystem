const mongoose = require('mongoose')

const airplaneTypeSchema = new mongoose.Schema(
    {
        Airplane_type_name: { type: String },
        Max_seats: { type: Number },
        Company: { type: String },

    }, { collection: 'airplane_type' }
)

module.exports = mongoose.model('airplane_type', airplaneTypeSchema)