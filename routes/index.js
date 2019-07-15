var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "projet_express",
  password: "2611198527071989",
  database: "test"
});



router.get('/connection', function(req, res, next) {
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM employe WHERE num_service = 30", function (err, result, fields) {
      if (err) throw err;
      console.log(result);

    });
  });
});
  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
