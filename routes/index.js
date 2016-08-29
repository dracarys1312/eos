var express = require('express');
var router = express.Router();
var controller = require('./controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * Get question
 */
router.get('/question',
    controller.Question.getQuestion
);

/**
 * Post answer
 */
router.post('/answer');

module.exports = router;
