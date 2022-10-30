const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const passengerSchema = new Schema({
    name: { type: String, required: true },
    idNumber: { type: String, required: true },
    contactNo: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
}, {
    timestamps: true,
});

const Passenger = mongoose.model('passenger', passengerSchema);

module.exports = Passenger;