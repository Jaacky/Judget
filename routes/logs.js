var express = require('express');
var router = express.Router();
var mongo = require('mongodb'),
	Purchase = require('../models/Purchase.js');

router.get('/', function(req, res, next) {
	Purchase.find({}, function(err, purchases) {
		console.log(purchases);
		res.render('logs', { purchases: JSON.stringify(purchases) }); 
	});
});

module.exports = router;