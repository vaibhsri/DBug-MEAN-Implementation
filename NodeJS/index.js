const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var codeController = require('./controller/codeController.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, ()=> console.log('DBug server started at localhost:3000!'));

app.use('/code', codeController);