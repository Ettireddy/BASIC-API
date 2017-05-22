// requiring modules
var helper = require('../helpers/helper.js');

// exporting the route's callback function
module.exports.cluster = function (req, res) {
    var command = req.params.cmd;
    helper.generatePlayBook();
    res.send(helper.executeChild(command));
}
