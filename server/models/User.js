const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-url');

// Create Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
    lastName: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    profPicLink: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('User', UserSchema);