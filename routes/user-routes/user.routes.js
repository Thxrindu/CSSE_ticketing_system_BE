const router = require('express').Router();
let User = require('../../models/user-models/user');

//get all users
router.route('/').get((req, res) => {
    User.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

//insert item
router.route('/add').post((req, res) => {

    const name = req.body.name;
    const idNumber = req.body.idNumber;
    const accountBalance = req.body.accountBalance;
    const dayPassStatus = req.body.dayPassStatus;
    const fineAmount = req.body.fineAmount;

    const newUser = new User({
        name,
        idNumber,
        accountBalance,
        dayPassStatus,
        fineAmount
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get item by ID
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete item
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//update user details
router.route('/updateuser/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {

            user.name = req.body.name;
            user.idNumber = req.body.idNumber;
            user.accountBalance = req.body.accountBalance;
            user.dayPassStatus = req.body.dayPassStatus;
            user.fineAmount = req.body.fineAmount;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;