var express = require('express');
var router = express.Router();
var mongo = require('mongodb'),
	Purchase = require('../models/Purchase.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/purchase', function(req, res, next) {
	res.render('purchase');
});

router.post('/purchase', function(req, res, next) {
	console.log(req.body);
	var option;
	if (req.body.optionInvestment == 'on') {
		option = 'investment';
	}
	else if (req.body.optionExtra == 'on') {
		option = 'extra';
	}
	else {
		option = 'useful';
	}

	var newPurchase = new Purchase({
		name : req.body.name,
		price : req.body.price,
		option : req.body.option
	});

	newPurchase.save(function(err, data) {
		if (err) res.render('purchase', {message: 'Problem logging purchase, please try again'});

		else {
			res.render('purchase', {message: 'Logged purchase!'});
		}
	});
});

router.get('/log', function(req, res, next) {
	Purchase.find({}, function(err, purchases) {
		console.log(purchases);
		res.render('log', { purchases: JSON.stringify(purchases) }); 
	});
});

module.exports = router;
