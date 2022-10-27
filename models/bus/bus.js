const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const busSchema = new Schema({
	busDate: { type: Date, required: true},
    busNo: { type: String, required: true },
    startLocation: { type: String, required: true },
    arriveLocation: { type: String, required: true },
    startingTime: { type: String, required: true },
    arriveTime: { type: String, required: true },
    driverName: { type: String, required: true },
    driverContact: { type: String, required: true },
    inspectorName: { type: String, required: true },
    inspectorContact: { type: String, required: true },
    seat: { type: String, required: true },
    totalAmount: { type: String, required: true },
    noOfPassengers: { type: String, required: true }

}, {
    timestamps: true,
});

const Bus = mongoose.model('bus', busSchema);

module.exports = Bus;