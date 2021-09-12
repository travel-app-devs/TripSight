const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
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
    }]
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = User = mongoose.model('User', userSchema);