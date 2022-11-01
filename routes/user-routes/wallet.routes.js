const router = require('express').Router();
let Wallet = require('../../models/user-models/wallet');

//get all
router.route('/').get((req, res) => {
    Wallet.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

//insert
router.route('/add').post((req, res) => {

    const passengerId = req.body.passengerId;
    const initialCredit = req.body.initialCredit;
    const accountBalance = req.body.accountBalance;
    const loanAmount = req.body.loanAmount;
    const loanStatus = req.body.loanStatus;

    const newWallet = new Wallet({
        passengerId,
        initialCredit,
        accountBalance,
        loanAmount,
        loanStatus
    });

    newWallet.save()
        .then(() => res.json('Wallet added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get by ID
router.route('/:id').get((req, res) => {
    Wallet.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    Wallet.findByIdAndDelete(req.params.id)
        .then(() => res.json('Wallet deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//update details
router.route('/updatewallet/:id').post((req, res) => {
    Wallet.findById(req.params.id)
        .then(user => {

            user.passengerId = req.body.passengerId;
            user.initialCredit = req.body.initialCredit;
            user.accountBalance = req.body.accountBalance;
            user.loanAmount = req.body.loanAmount;
            user.loanStatus = req.body.loanStatus;

            user.save()
                .then(() => res.json('Wallet updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//update amount
router.route('/updateamount/:id').post((req, res) => {
    Wallet.findById(req.params.id)
        .then(user => {

            const a = parseInt(user.accountBalance);
            const b = parseInt(req.body.accountBalance);

            let sum = a + b;
            user.accountBalance = sum;

            user.save()
                .then(() => res.json('Amount updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;