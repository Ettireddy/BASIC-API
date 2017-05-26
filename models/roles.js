// require mongoose
var restful = require('node-restful');
var mongoose = require('mongoose');

// creating schema
var roleSchema = mongoose.Schema({
    Name: String,
    Type: String
});

// creating a model
var Roles = restful.model('Role', roleSchema);

module.exports = Roles;