// requiring the model.
var Users = require('../models/users');

// exporting the route '/createtasks' callback function for mounting.
module.exports.createUser = function(req, res){
	Users({userId:req.body.id, name: req.body.name}).save(function(err){
		if(err) throw err;
		res.redirect('/users');
	});
}