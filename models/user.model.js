const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/miniproject`);

const userSchema = mongoose.Schema({
    username:  String,
    email: String,
    age: Number,
    name: String,
    password: String,
    profilepic: {
        type: String,
        default: 'profile.jpeg'
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "post"
        }
    ]
})

module.exports = mongoose.model("user", userSchema)