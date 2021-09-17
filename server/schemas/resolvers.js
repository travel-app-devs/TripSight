const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Album } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    allPosts: async () => {
      return Post.find({});
    },
    albums: async () => {
      return Album.find({});
    },
    user: async (parent, { _id }) => {
      const params = { _id: _id };
      return User.findOne(params);
    },
    thisUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    thisUserPosts: async (parent, args, context) => {
      if (context.user) {
        return Post.findOne({ userId: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    thisUserAlbums: async (parent, args, context) => {
      if (context.user) {
        return Album.findOne({ userId: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    post: async (parent, { _id }) => {
      const params = _id ? { _id: _id } : {};
      return Post.findOne(params);
    },
    album: async (parent, { _id }) => {
      const params = _id ? { _id: _id } : {};
      return Album.findOne(params);
    },
    userPosts: async (parent, { _id }) => {
      const params = _id ? { userId: _id } : {};
      return Post.find(params);
    },
    albumPosts: async (parent, { albumId }) => {
      const params = albumId ? { albumId: albumId } : {};
      return Post.find(params);
    },
    userAlbums: async (parent, { userId }) => {
      const params = _id ? { userId: userId } : {};
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
        throw new AuthenticationError('Incorrect Email or Password')
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Email or Password')
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
    
    updateUserDev: async (parent, args) => {
      const updated = await User.findOneAndUpdate(
        {_id: args._id},
        args
      );
      return updated;
    },

    updatePost: async (parent, args, context) => {
      if (context.user) {
        const find = await Post.findById(args._id);
        if (find.userId === context.user._id){
        const updated = await Post.findOneAndUpdate(
          {_id: context.user._id},
          args,
          { new: true }
        );
        return updated;
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updatePostDev: async (parent, args) => {
        const updated = await Post.findOneAndUpdate(
          {_id: args._id},
          args
        );
        return updated;
      },
    updateAlbum: async (parent, args) => {
      if (context.user) {
        const find = await Album.findById(args._id);
        if (find.userId === context.user._id){
        const updated = await Album.findOneAndUpdate(
          {_id: args._id},
          args,
          { new: true }
        );
        return updated;
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateAlbumDev: async (parent, args) => {
      const updated = await Album.findOneAndUpdate(
        {_id: args._id},
        args
      );
      return updated;
    },
  }
};


module.exports = resolvers;