var apis= [
    'home',
    'users',
    'getUser',
    'createUser',
    'updateUser',
    'deleteUser',
    'cluster'
];

apis.forEach( function(api) {
    module.exports[api] = require(__dirname + '/' + api)[api];
});