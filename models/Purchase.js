var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var purchaseSchema = new Schema({
	name : { type: String, required: true },
	timestamp : { type: Date, required: true, default: Date.now },
	price : { type: Number, required: true },
	option : { type: String, enum: ['useful', 'extra', 'investment'], default: 'useful' }
});

module.exports = mongoose.model('Purchase', purchaseSchema);