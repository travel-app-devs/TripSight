const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    textBody: {
        type: String,
        required: false,
        unique: false,
    },
    titleImageLink: {
        type: String,
        required: false,
    },
    bodyImageLinks: {
        type: String,
        required: false,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    userInfo: {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        pinned: {
            type: Boolean,
            default: false,
        }
    },
    albumID: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }
});

module.exports = Post = mongoose.model('Post', PostSchema);