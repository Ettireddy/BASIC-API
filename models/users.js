// require mongoose
var mongoose = require('mongoose');

// creating schema
var userSchema = mongoose.Schema({
    FName: String,
    LName: String,
    RoleId: Number,
    SiteId: Number,
    TenantId: Number,
    UserName: String,
    Password: String
});

// creating a model
var Users = mongoose.model('User', userSchema);

module.exports = Users;