module.exports.home = function (req, res){
    res.json({ id: 1, name: "eshwar", something: res.something, args: res.args});
}