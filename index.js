'use strict';

var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var opener = require('opener');
var businessApp = express();
businessApp.use(serveStatic(__dirname));
businessApp.use(bodyParser.json());
businessApp.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


businessApp.listen(4000, function () {
    opener('http://localhost:4000');
});
