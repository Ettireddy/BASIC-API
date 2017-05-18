module.exports.home = function(req, res, next){
    res.args = arguments.length;
    res.something = 'we got something in middleware here';
    next();
}