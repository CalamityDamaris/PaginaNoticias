var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController')
/* GET home page. */
router.get('/', mainController.index);
router.get('/noticia', function(req, res, next) {
  res.render('noticia', { title: 'Express' });
});
router.get('/crud', function(req, res, next) {
  res.render('crud', { title: 'Express' });
});

module.exports = router;
