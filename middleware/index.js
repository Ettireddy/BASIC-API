var middlewares = [
    'home'
];

middlewares.forEach( function(middleware){
    module.exports[middleware] = require(__dirname +'/'+ middleware)[middleware];
});