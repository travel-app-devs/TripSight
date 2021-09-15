const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Album } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    posts: async () => {
      return Post.find({});
    },
    albums: async () => {
      return Album.find({});
    },
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
    thisUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    thisUserPosts: async (parent, args, context) => {
      if (context.user) {
        return Post.find({ userId: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    thisUserAlbums: async (parent, args, context) => {
      if (context.user) {
        return Album.find({ userId: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    post: async (parent, { _id }) => {
      const params = _id ? { _id: _id } : {};
      return Post.find(params);
    },
    album: async (parent, { _id }) => {
      const params = _id ? { _id: _id } : {};
      return Album.find(params);
    },
    userPosts: async (parent, { _id }) => {
      const params = _id ? { _id: _id } : {};
      return Post.find(params);
    },
    albumPosts: async (parent, { userId }) => {
      const params = userId ? { userId: userId } : {};
      return Post.find(params);
    },
    userAlbums: async (parent, { _id }) => {
      const params = _id ? { _id: _id } : {};
      return Album.find(params);
    },
    placePosts: async (parent, { latitude, longitude }) => {
      const params = { latitude, longitude } ? { latitude: latitude, longitude: longitude } : {};
      return Post.find(params);
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError('No User Found')
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password')
      }

      const token = signToken(user);
      return { token, user }
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password })
      const token = signToken(user);
      return { token, user };
    },

    addPost: async (parent, args) => {
      const addPost = await Post.create(args);

      return addPost
    },
    addAlbum: async (parent, args) => {
      return Album.create(args)
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        const updated = await User.findOneAndUpdate(
          { _id: context.user._id },
          args,
          { new: true }
        );
        return updated;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updatePost: async (parent, args) => {
      if (context.user) {
        const updated = await Post.findOneAndUpdate(
          { userId: context.user._id },
          args,
          { new: true }
        );
        return updated;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateAlbum: async (parent, args) => {
      if (context.user) {
        const updated = await Album.findOneAndUpdate(
          { userId: context.user._id },
          args,
          { new: true }
        );
        return updated;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;