var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Kepler' });
});


/* Show Dashboard */
data = require('../model/influxlog');
router.get('/log', data.sendToInflux);
//router.get('/delivery/:vendor_id', data.get_delivery_main);

//router.get('/order/:order_id', data.get_timeslot_detail_buffer); 


module.exports = router;

