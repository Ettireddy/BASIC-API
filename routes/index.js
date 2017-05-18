var express = require('express');
var router = express.Router();

var controllers = require('../controllers');
var middlewares = require('../middleware');

/* GET home page. */
router.get('/', middlewares.home, controllers.home);

module.exports = router;
