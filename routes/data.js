var express = require('express');
var router = express.Router();


/* Get Small Data */
data = require('../model/data');
router.post('/mainchart', data.mainChartActiveUser);
router.post('/banner/funnel', data.bannerFunnel);

/* Get Chart Data */



module.exports = router;

