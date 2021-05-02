
const mongoose = require('mongoose')

const FareSchema = new mongoose.Schema(
    {
        Flight_number: { type: String },
        Fare_code: { type: String },
        Amount: { type: Number },
        Restrictions: { type: String },

    }, { collection: 'fare' }
)

module.exports = mongoose.model('fare', FareSchema);





