const router = require('express').Router();
let Loan = require('../../models/user-models/loan');

//get all
// router.route('/:id').get((req, res) => {
//     Loan.find({ passengerId : req.params.id})
//         .then(loans => res.json(loans))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

//insert
router.route('/add').post((req, res) => {

    const passengerId = req.body.id;
    const loanAmount = req.body.loanAmount;
    const loanDate = req.body.loanDate;

    const newLoan = new Loan({
        passengerId,
        loanAmount,
        loanDate
    });

    newLoan.save()
        .then(() => res.json('Loan added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;