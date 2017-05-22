// requiring the model
var Users = require('../models/users');

// exporting the route's callback function
module.exports.getUser = function(req, res) {

   Users.findOne({userId:req.params.id}, function(err, user){
       if (err) throw err;
       var resData = [];
       if (!user) {
           res.json({msg: 'no user found by userId: '+req.params.id});
       } else {
            resData.push(user);
            res.send(resData);
       }
   });
}