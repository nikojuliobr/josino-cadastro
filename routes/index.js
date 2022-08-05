var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Projeto Web',
    nomes: ['Maria', 'Jose', 'Elias']
  });
});

module.exports = router;
