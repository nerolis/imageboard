var mongoose = require('mongoose');
var autoIncrement = require("mongodb-autoincrement");

var schema = new mongoose.Schema({
    ...
});

schema.plugin(autoIncrement.mongoosePlugin);