// require modules
var restful = require('node-restful');
var mongoose = require('mongoose');

// creating schema
var adminSchema = mongoose.Schema({
    Name: String,
    ResellerId: Number,
    OrganizationName: String,
    Location: String
});

// creating a model
var CloudAdmins = restful.model('CloudAdmin', adminSchema);

module.exports = CloudAdmins;