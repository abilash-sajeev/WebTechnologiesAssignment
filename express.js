var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

var getUpper = require('./getUpper.js');
var getLower = require('./getLower.js');

app.use('/getUpper', getUpper);
app.use('/getLower', getLower);

app.listen(3000);
