// require mongoose
var mongoose = require('mongoose');

// creating schema
var siteSchema = mongoose.Schema({
    Name: String,
    TenantId: Number,
    Name: String,
});

// creating a model
var Sites = mongoose.model('Site', siteSchema);

module.exports = Sites;