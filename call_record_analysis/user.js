var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: Number,
    source: String,
    destination: String,
    sourceLocation: String,
    destinationLocation: String,
    callDuration: String,
    roaming: String,
    callCharge: String
});

module.exports =  mongoose.model('User', UserSchema)

