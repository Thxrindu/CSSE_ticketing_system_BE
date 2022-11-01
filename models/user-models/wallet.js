const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const walletScheme = new Schema({
    passengerId: { type: String, required: true },
    initialCredit: { type: String, required: true },
    accountBalance: { type: Number, required: true },
    loanAmount: { type: String, required: true },
    loanStatus: { type: String, required: true },
}, {
    timestamps: true,
});

const Wallet = mongoose.model('wallet', walletScheme);

module.exports = Wallet;