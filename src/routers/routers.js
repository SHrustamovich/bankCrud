const express = require('express')
const router = express.Router()
const BankController = require('../controllers/bankController')

router
 .get('/allbank',BankController.GET)
 .post('/newbank',BankController.POST)
 .put('/updatebank',BankController.PUT)
 .delete('/deletebank',BankController.DELETE)
 module.exports = router