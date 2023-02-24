const { model, Schema } = require('mongoose');

const postSchema = new Schema({
 postText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500,
    trim: true,
 },
 postAuthor: {
    type: String,
    required: true,
    trim: true,
 },
 createdAt: {
    type: Date,
    default: Date.now,
 },
 comments: [
    {
        commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlenght: 280,
        }, 
        commentAuthor: {
            type: String,
            required: true,
        },
        createdAt: {type: Date, default: Date.now}
    }
 ],
})

const Post = model('Post', postSchema);

module.exports = Post;