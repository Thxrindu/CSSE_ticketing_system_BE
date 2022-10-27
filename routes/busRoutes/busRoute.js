const router = require('express').Router();
let Bus = require('../../models/bus/bus');

// insert arrive bus
router.route('/add').post((req, res) => {

    const BusDetails = new Bus({
        busDate: req.body.busDate,
        busNo: req.body.busNo,
        startLocation: req.body.startLocation,
        arriveLocation: req.body.arriveLocation,
        startingTime: req.body.startingTime,
        arriveTime: req.body.arriveTime,
        driverName: req.body.driverName,
        driverContact: req.body.driverContact,
        inspectorName: req.body.inspectorName,
        inspectorContact: req.body.inspectorContact,
        seat: req.body.seat,
        totalAmount: req.body.totalAmount,
        noOfPassengers: req.body.noOfPassengers,
    });

    BusDetails.save()
        .then(() => res.json('Assign Bus Successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// get all
router.route('/').get((req, res) => {
    Bus.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

// get bus details by id
router.route('/:id').get((req, res) => {
    Bus.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

// delete bus details
router.route('/:id').delete((req, res) => {
    Bus.findByIdAndDelete(req.params.id)
        .then(() => res.json('Bus removing Successfully.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// update bus details
router.route('/update/:id').post((req, res) => {
    Bus.findById(req.params.id)

        .then(busDetails => {
            busDetails.busDate = req.body.busDate,
                busDetails.busNo = req.body.busNo,
                busDetails.startLocation = req.body.startLocation,
                busDetails.arriveLocation = req.body.arriveLocation,
                busDetails.startingTime = req.body.startingTime,
                busDetails.arriveTime = req.body.arriveTime,
                busDetails.driverName = req.body.driverName,
                busDetails.driverContact = req.body.driverContact,
                busDetails.inspectorName = req.body.inspectorName,
                busDetails.inspectorContact = req.body.inspectorContact,
                busDetails.seat = req.body.seat,
                busDetails.totalAmount = req.body.totalAmount,
                busDetails.noOfPassengers = req.body.noOfPassengers,

                busDetails.save()
                    .then(() => res.json('Arrive bus Updated'))
                    .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});


//search Date Rage
router.post("/search", async (req, res) => {
    try {
        Bus
            .find({
                busDate : {
                    $gte: new Date(req.body.fromDate),
                    $lt: new Date(req.body.toDate),
                },
            })
            .then((result) => {
                // console.log(result);
                res.json(result);
            });
    } catch (error) {
        // console.log(error);
        res.status(500).send({ message: error });
    }
});

module.exports = router;