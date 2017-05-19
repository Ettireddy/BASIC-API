var express = require('express');
var router = express.Router();

var controllers = require('../controllers');
var middlewares = require('../middleware');

/* GET home page. */
router.get('/', middlewares.home, controllers.home);
router.get('/users', controllers.users);
router.get('/users/:id', controllers.getUser);
router.post('/createUser', controllers.createUser);
router.put('/updateUser/:id', controllers.updateUser);
router.delete('/deleteUser/:id', controllers.deleteUser);

module.exports = router;
