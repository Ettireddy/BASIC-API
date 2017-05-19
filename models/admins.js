// require mongoose
var mongoose = require('mongoose');

// creating schema
var adminSchema = mongoose.Schema({
    Name: String,
    ResellerId: Number,
    OrganizationName: String,
    Location: String
});

// creating a model
var CloudAdmins = mongoose.model('Tenant', adminSchema);

module.exports = CloudAdmins;