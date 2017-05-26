// require mongoose
var restful = require('node-restful');
var mongoose = require('mongoose');

// creating schema
var siteSchema = mongoose.Schema({
    Name: String,
    TenantId: Number,
    Name: String,
});

// creating a model
var Sites = restful.model('Site', siteSchema);

module.exports = Sites;