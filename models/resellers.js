// require modules
var restful = require('node-restful');
var mongoose = require('mongoose');

// creating schema
var resellerSchema = mongoose.Schema({
    Name: String,
    OrganizationName: String,
    Location: String
});

// creating a model
var Resellers = restful.model('Reseller', resellerSchema);

module.exports = Resellers;