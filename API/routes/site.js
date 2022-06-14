const express = require('express');
const router = express.Router();
const site = require('../Controllers/site')

//[GET] /
router.get('/', site.homeController)

module.exports = router