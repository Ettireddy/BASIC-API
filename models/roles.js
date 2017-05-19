// require mongoose
var mongoose = require('mongoose');

// creating schema
var roleSchema = mongoose.Schema({
    Name: String,
    Type: String
});

// creating a model
var Roles = mongoose.model('Role', roleSchema);

module.exports = Roles;