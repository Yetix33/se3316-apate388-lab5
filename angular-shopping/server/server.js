var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8081;

var router = express.Router();
var heroes = [];
router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
   console.log('Something is happening.');
   next(); 
});


router.get('/', function(req, res) {
    res.json({ message: 'Thor' });
});

router.route('/items')
    //POST function
    .post(function(req,res){
        heroes.push(req.body.name);
        res.json(heroes);

    })
    .get(function(req,res){
        res.json(heroes);
    })

app.use('/api', router);

app.listen(port);
console.log('Server is running on port ' + port);