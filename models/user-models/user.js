const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    idNumber: { type: String, required: true },
    accountBalance: { type: String, required: true },
    dayPassStatus: { type: String, required: true },
    fineAmount: { type: String, required: true },
}, {
    timestamps: true,
});

const User = mongoose.model('user', userSchema);

module.exports = User;