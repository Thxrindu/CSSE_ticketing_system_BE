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

<<<<<<< HEAD
//Customer Routes
const userRouter = require('./routes/user-routes/user.routes');

//Customer Routes
app.use('/user', userRouter);
=======
// Bus Routes
const busRoutes = require("./routes/busRoutes/busRoute");

//Bus Routes
app.use('/bus', busRoutes);



>>>>>>> 3f2ed0fd9d274c186f575251625878e74cfc6b5c

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});