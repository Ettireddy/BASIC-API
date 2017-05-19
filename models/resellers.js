// require mongoose
var mongoose = require('mongoose');

// creating schema
var resellerSchema = mongoose.Schema({
    Name: String,
    OrganizationName: String,
    Location: String
});

// creating a model
var Resellers = mongoose.model('Reseller', resellerSchema);

module.exports = Resellers;