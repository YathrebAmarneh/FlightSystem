
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080
const flights = require('./schemas/flight')
const fares = require('./schemas/fare')
const reservation = require('./schemas/seatReservation')

//connect to mongoose
mongoose.connect('mongodb://localhost/nodemongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const db = mongoose.connection

//check for DB connection
db.once('open', () => console.log('Connected to MongoDB successfully'))

db.on('error', () => console.log(err))

app.get('/flights', (req, res) => { // List all flights

    flights.find(function (err, result) {

        res.status(200).json({
            status: 200,
            number_of_results: result.length,
            flights: result
        })

        if (err) throw err

    })
})  //end of first requirement


app.get('/flight', function (req, res) {   //Get a flight according to the Flight_number field

    const query = req.query.Flight_number
    flights.find({ Flight_number: { $regex: query, $options: '$i' } }, function (err, result) {
        // $regex. in Mongo DB Provides regular expression capabilities for pattern matching strings in queries
        //{ <field>: { $regex: /pattern/, $options: '<options>' } }
        if (err) throw err

        res.status(200).json({
            status: 200,
            number_of_results: result.length,
            flights: result
        })
    })
}) // end of second requirement

app.get('/fares', (req, res) => {  // list of flights prices
    fares.find({}, { Flight_number: 1, Fare_code: 1, Amount: 1 }, function (err, result) {

        if (err) throw err

        res.status(200).json({

            status: 200,
            number_of_results: result.length,
            flights: result
        })
    })
}) // end of third requirement

app.get('/reservations', (req, res) => { // list the reservations on the system
    reservation.find({}, { Flight_number: 1, Date: 1, Seat_number: 1, Customer_name: 1 }, function (err, result) {

        if (err) throw err

        res.status(200).json({

            status: 200,
            number_of_results: result.length,
            flights: result
        })
    })
})  //end of fourth requirement

app.get('/invoice', (req, res) => {
    const query = req.query.Customer_name
    reservation.find({ Customer_name: { $regex: query, $options: '$i' } }, { Customer_name: 1, Date: 1, Flight_number: 1, Fare_code: 1, Amount: 1 }, function (err, result) {

        if (err) throw err

        res.status(200).json({

            status: 200,
            number_of_results: result.length,
            flights: result
        })
    })
}) //end of last requirement

app.listen(port, () => {
    console.log(`The server is listening at http://localhost:${port}`)
})