let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET tickets page. */
router.get('/tickets', function(req, res, next) {
  res.render('index', { title: 'Tickets'});
});

/* GET clients page. */
router.get('/clients', function(req, res, next) {
  res.render('index', { title: 'Clients'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET users page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Support'});
});

module.exports = router;
