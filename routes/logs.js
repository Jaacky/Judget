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

router.get('/investments', function(req, res, next) {
	Purchase.find({'option' : 'investment'}, function(err, purchases) {
		res.render('investments', { purchases: JSON.stringify(purchases) });
	});
});

module.exports = router;