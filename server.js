const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    'useNewUrlParser': true
}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Passenger Routes
const passengerRouter = require('./routes/user-routes/passenger.routes');
const walletRouter = require('./routes/user-routes/wallet.routes');
const recharge = require('./routes/user-routes/recharge.routes');
const loan = require('./routes/user-routes/loan.routes');

// Bus Routes
const busRoutes = require("./routes/busRoutes/busRoute");

//Passenger Routes
app.use('/passenger', passengerRouter);
app.use('/wallet', walletRouter);
app.use('/recharge', recharge);
app.use('/loan', loan);

//Bus Routes
app.use('/bus', busRoutes);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});