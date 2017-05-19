// requiring the model.
var Users = require('../models/users.js');

// exporting the route '/createtasks' callback function for mounting.
module.exports.updateUser = function(req, res){
	Users.findOne({userId:req.params.id}, function(err, user){
		if(err) throw err;
		user.name = req.body.name;
		user.save(function(err){
			if(err) throw err;
			res.redirect('/');
		});
		
	});
}