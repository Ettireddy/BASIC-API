// require mongoose
var mongoose = require('mongoose');

// creating schema
var userSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    name: String
});

// creating a model
var Users = mongoose.model('User', userSchema);

module.exports = Users;