var express = require('express');
var router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log(`[middleware:router_level] [${new Date().toISOString()}] ${req.method} ${req.url}`);
  next()
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
