// requiring the model
var Users = require('../models/users');

// exporting the route's callback function
module.exports.users = function(req, res) {
    Users.find({}, function(err, data){
        if (err) throw err;
        var resData = [];
        data.forEach(function(item){
            resData.push(item);
        });
        if(resData.length === 0){
			res.json({ msg:'no users found currently, please add a user!'});
		} else {
            res.send(resData);
        }
    });
}