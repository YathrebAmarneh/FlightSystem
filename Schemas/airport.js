const mongoose = require('mongoose')

const airport = new mongoose.Schema(
    {
        Airport_code: { type: String, require: true },
        Name: { type: String, require: true },
        City: { type: String },
        State: { type: String },
    }, { collection: 'airport' },
)

module.exports = mongoose.model('airport', airport)