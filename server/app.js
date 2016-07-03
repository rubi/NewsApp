var express = require('express');
var app = express();
var router = express.Router();
var ejs = require('ejs');
var fs = require('fs');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('authen', 'user');
app.use('/static', express.static('static'));
//form data 'Content-Type': 'application/x-www-form-urlencoded'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the about route
router.get('/newsTabList1', function(req, res) {
    var templateJson = JSON.parse(fs.readFileSync('json/newsTabList1.json', 'utf8'));
    res.json(templateJson);
});

router.get('/newsTabList2', function(req, res) {
    var templateJson = JSON.parse(fs.readFileSync('json/newsTabList2.json', 'utf8'));
    res.json(templateJson);
});

router.get('/newsTabList3', function(req, res) {
    var templateJson = JSON.parse(fs.readFileSync('json/newsTabList3.json', 'utf8'));
    res.json(templateJson);
});

router.get('/newsTabList4', function(req, res) {
    var templateJson = JSON.parse(fs.readFileSync('json/newsTabList4.json', 'utf8'));
    res.json(templateJson);
});

router.get('/newsTabList5', function(req, res) {
    var templateJson = JSON.parse(fs.readFileSync('json/newsTabList5.json', 'utf8'));
    res.json(templateJson);
});

router.post('/edit', function(req, res){
    var expenseId = req.body.expenseId;
    /*dboLogic.tableExpenseEditPromise({
        'expenseId': expenseId
    }).then(function(data){
        res.json(data);
    });*/
});

app.use('/api', router);
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});