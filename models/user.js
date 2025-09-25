const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
    },

});

userSchema.plugin(passportLocalMongoose);  // Included bcoz it automatically uses the salting of the passw

module.exports = mongoose.model('User', userSchema);
