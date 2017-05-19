var controllers = [
    'home',
    'users',
    'getUser',
    'createUser',
    'updateUser',
    'deleteUser'
];

controllers.forEach( function(controller) {
    module.exports[controller] = require(__dirname + '/' + controller)[controller];
});