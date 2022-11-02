const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loanScheme = new Schema({
    passengerId: { type: String, required: true },
    loanAmount: { type: Number, required: true },
    loanDate: { type: String, required: true }
}, {
    timestamps: true,
});

const Loan = mongoose.model('loan', loanScheme);

module.exports = Loan;