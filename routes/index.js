var express = require('express');
var router = express.Router();

var apis = require('../apis');
var middlewares = require('../middleware');

/* GET home page. */
router.get('/', middlewares.home, apis.home);
router.get('/users', apis.users);
router.get('/users/:id', apis.getUser);
router.post('/createUser', apis.createUser);
router.put('/updateUser/:id', apis.updateUser);
router.delete('/deleteUser/:id', apis.deleteUser);
router.get('/cluster/:cmd', apis.cluster);

module.exports = router;
