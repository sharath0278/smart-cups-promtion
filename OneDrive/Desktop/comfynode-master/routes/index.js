var express = require('express');
var router = express.Router();


const homeCtrl = require('../controller/home');
router.get('/', homeCtrl.getRenderHome);
router.get('/details', homeCtrl.getRenderDetail)
router.get('/cart', homeCtrl.getRenderCart)
router.get('/billing', homeCtrl.getRenderBilling)

module.exports = router;
