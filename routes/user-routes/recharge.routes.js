const router = require('express').Router();
let Recharge = require('../../models/user-models/recharge');

//insert
router.route('/add').post((req, res) => {

    const passengerId = req.body.id;
    const rechargeAmount = req.body.rechargeAmount;
    const rechargeDate = req.body.rechargeDate;

    const newRecharge = new Recharge({
        passengerId,
        rechargeAmount,
        rechargeDate
    });

    newRecharge.save()
        .then(() => res.json('Recharge added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;