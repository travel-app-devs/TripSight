const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imageLink: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    pinned: {
            type: Boolean,
            default: false,
        }
    }
);

module.exports = Album = mongoose.model('Album', AlbumSchema);