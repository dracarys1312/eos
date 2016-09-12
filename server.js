'use strict';

const express   = require('express');
const router    = require('./router');
const servicesRegistra = require('./services');
const question  = require('./app/question');
const test      = require('./app/test');

let app     = express();

servicesRegistra(app);
app.use(question);
app.use(test);
app.use(router);

app.listen(8080);