// require mongoose
var mongoose = require('mongoose');

// creating schema
var tenantSchema = mongoose.Schema({
    Name: String,
    ResellerId: Number,
    OrganizationName: String,
    Location: String
});

// creating a model
var Tenants = mongoose.model('Tenant', tenantSchema);

module.exports = Tenants;