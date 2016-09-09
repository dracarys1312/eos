'use strict';

const express   = require('express');
const router    = require('./router');
const servicesRegistra = require('./services');
const question  = require('./app/question');
const part      = require('./app/part');

let app     = express();

servicesRegistra(app);
app.use(question);
app.use(part);
app.use(router);

app.listen(8080);