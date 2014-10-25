var express = require('express');
var router = express.Router();

var blu;
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/bla', function(req, res){
    res.json({bla:blu});
});

router.get('/subscribe', function(req, res){
    console.log(req.query["hub.challenge"]);
    res.send(req.query["hub.challenge"].toString());
});

router.post('/subscribe', function(req, res){
    console.log(req.body);
    blu = req.body;
    res.send(200);
});

module.exports = router;
