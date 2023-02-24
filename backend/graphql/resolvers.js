const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            return await User.find().populate('posts')
        },
        user: async (parent,  { username }) => {
            return await User.findOne({ username }).populate('posts');
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        post: async (parent, { postId }) => { 
            return await Post.findOne({ _id: postId }).populate('user');
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('posts');
            }
            throw new AuthenticationError('No user found');
        },
    },

    Mutation: {
        addUser: async (parent, { email, password }) => {
            const user = await User.create({username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async(parent, { email, password }) => {
            const user = await User.findOne({  email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, { postText }, context) => {
            if (context.user) {
                const post = await Post.create({
                    postText,
                    postAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user_id },
                    { $addToSet: { posts: post._id } }
                )

                return post;
            }

            throw new AuthenticationError('No user found');
        },
        addComment: async (parent, { postId, commentText }, context) => {
            if (context.user) {
              return Post.findOneAndUpdate (
                { _id: thoughId },
                {
                    $addToSet: {
                        comments: { commentText, commentAuthor: context.user.username },
                    },  
                },
                {
                    new: true,
                    runValidators: true,
                }
              );
                    
            }
            throw new AuthenticationError('No user found');
        },
        removePost: async (parent, { postId }, context) => {
            if (context.user) {
                const post = await Post.findOneAndDelete({
                    _id: postId,
                    authorId: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { posts: post._id } }
                );

                return post;
            }
            throw new AuthenticationError('No user found');
        },
        removeComment: async (parent, { postId, commentId }, context) => {
            if (context.user) {
                return Post.findOneAndUpdate (
                    { _id: postId },
                    {
                        $pull: {
                          comments: {
                            _id: commentId,
                            commentAuthor: context.user.username,
                          },
                        },
                    },

                    { new: true }
                )
            }  
            throw new AuthenticationError('No user found');
        },
    } 
}

module.exports = resolvers;