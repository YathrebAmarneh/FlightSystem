const mongoose = require('mongoose')

const canLandSchema = new mongoose.Schema(
    {
        Airplane_type_name: { type: String },
        Airport_code: { type: String },


    }, { collection: 'can_land' }
)
module.exports = mongoose.model('can_land', canLandSchema)