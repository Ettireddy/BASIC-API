var Users = require('../models/users');

module.exports.deleteUser = function(req, res){

	Users.findOneAndRemove({userId:req.params.id}, function(err){
		if(err) throw err;
		res.json({msg:'successfully deleted user with Id: '+req.params.id});
	});
}