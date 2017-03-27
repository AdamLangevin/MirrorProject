var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

var debug = new (require('../assests/js/dev-helpers'))(__filename);

var index = path.join(__dirname, '..', 'views', 'index.html');


router.get('/*', (req, res, next) => {
  debug.log(debug.msg(8, req.headers.host));
  if(!(req.headers.host === 'mirror.ca' || req.headers.host ==='192.168.0.188')) {
    if(process.env.NODE_ENV !== 'development'){
      console.log('Here is a reject.');
      return res.status(400);

    } else next();
  } else next();
});

router.get('/index', (req, res, next) => res.sendFile(index));
router.get('/off', (req, res, next) => res.sendFile(path.join(__dirname,'../views/off.html')));
router.get('/reminders', (req, res, next) => res.sendFile(path.join(__dirname,'../views/reminders.html')));
router.get('/news', (req, res, next)=> res.sendFile(path.join(__dirname,'../views/news.html')));
router.get('/', (req, res, next) => res.sendFile(path.join(__dirname,'../views/home.html')));

module.exports = router;
