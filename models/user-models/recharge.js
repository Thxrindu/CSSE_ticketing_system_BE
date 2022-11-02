const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rechargeScheme = new Schema({
    passengerId: { type: String, required: true },
    rechargeAmount: { type: Number, required: true },
    rechargeDate: { type: String, required: true }
}, {
    timestamps: true,
});

const Recharge = mongoose.model('recharge', rechargeScheme);

module.exports = Recharge;