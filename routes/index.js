var express = require('express');
var router = express.Router();

var apis = require('../apis');
var middlewares = require('../middleware');

//requiring models.
var CloudAdmin = require('../models/admins');
var Reseller = require('../models/resellers');
var Role = require('../models/roles');
var Site = require('../models/sites');
var Tenant = require('../models/tenants');

// binding methods to endpoints in node-restul framework
CloudAdmin.methods(['get', 'put', 'post', 'delete']);
CloudAdmin.register(router, '/cloudadmin');

Reseller.methods(['get', 'put', 'post', 'delete']);
Reseller.register(router, '/reseller');

Role.methods(['get', 'put', 'post', 'delete']);
Role.register(router, '/role');

Site.methods(['get', 'put', 'post', 'delete']);
Site.register(router, '/site');

Tenant.methods(['get', 'put', 'post', 'delete']);
Tenant.register(router, '/tenant');

/*Endpoints */
router.get('/', middlewares.home, apis.home);
router.get('/users', apis.users);
router.get('/users/:id', apis.getUser);
router.post('/createUser', apis.createUser);
router.put('/updateUser/:id', apis.updateUser);
router.delete('/deleteUser/:id', apis.deleteUser);
router.get('/cluster/:cmd', apis.cluster);

module.exports = router;
