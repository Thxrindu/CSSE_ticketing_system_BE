const router = require('express').Router();
let User = require('../../models/user-models/passenger');

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
    const contactNo = req.body.contactNo;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;

    const newUser = new User({
        name,
        idNumber,
        contactNo,
        email,
        password,
        type
    });

    newUser.save()
        .then(() => res.json('Passenger added!'))
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
            user.contactNo = req.body.contactNo;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;