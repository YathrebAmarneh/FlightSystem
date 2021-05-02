const mongoose = require('mongoose')
const seatReservation = require('./Schemas/seatReservation')
const fs = require('fs')


mongoose.connect('mongodb://localhost:27017/nodemongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const seatReservation = JSON.parse(fs.readFileSync(`${__dirname}/data/seatReservation.json`, 'utf-8'))

const importDataofSchema = async () => {
    try {
        await seatReservation.create(seatReservation)
        console.log(`Data of Flight successfully imported to Mongo DB`)
        process.exit()
    } catch (err) {
        console.log(err)
    }
}

importDataofSchema()


