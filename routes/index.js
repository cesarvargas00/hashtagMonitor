var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/bla', function(req, res){
    res.json({bla:'blu'});
});

router.get('/subscribe', function(req, res){
    console.log(req.query["hub.challenge"]);
    res.send(req.query["hub.challenge"].toString());
});

module.exports = router;
