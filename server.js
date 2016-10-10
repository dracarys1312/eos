'use strict';

const express   = require('express');
const router    = require('./router');
const servicesRegistra = require('./services');
const question  = require('./app/question');
const test      = require('./app/test');
const bodyParser          = require('body-parser');

let app     = express();

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

servicesRegistra(app);
app.use(bodyParser.json());
app.use(question);
app.use(test);
app.use(router);

app.listen(9966);