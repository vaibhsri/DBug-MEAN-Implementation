const mongoose = require('mongoose');

var Code = mongoose.model('Code', {
    user: {type: String},
    code: {type: String},
    language: {type: String},
    Serial: {type: Number}
});

module.exports = { Code }; //ES6 shorthand