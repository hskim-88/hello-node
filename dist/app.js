"use strict";
var express = require('express');
var app = express();
app.get('/', function (_req, res) {
    res.send('Hello World!');
});
app.get('/version', function (_req, res) {
    res.send('version5');
});
app.listen(3000, function () {
    console.log('app listening on port 3000!');
});
