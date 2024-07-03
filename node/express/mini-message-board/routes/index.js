const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages});
});

/* GET new message form */
router.get('/new', function(req, res, next) {
  res.render('form', {});
});

/* POST new message form information*/
router.post('/new', function(req, res, next) {
  messages.push({
      text: req.body.authorMessage,
      user: req.body.authorName,
      added: new Date()
  });
  res.redirect('/');
});


module.exports = router;
