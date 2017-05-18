var controllers = [
    'home'
];

controllers.forEach( function(controller) {
    module.exports[controller] = require(__dirname + '/' + controller)[controller];
});