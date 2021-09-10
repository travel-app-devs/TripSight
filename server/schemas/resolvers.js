const { User, Post, Album } = require('../models');

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
    post: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Post.find(params);
    },
    album: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Album.find(params);
    },
    userPosts: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Post.find(params);
    },
    albumPosts: async (parent, { userId }) => {
      const params = userId ? userId : {};
      return Post.find(params);
    },
    userAlbums: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Album.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      return User.create(
        args,
        {
          new: true,
          runValidators: true,
        }
      )
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, args) => {
      return Post.create(
        args,
        {
          new: true,
          runValidators: true,
        }
      )
    },
    addAlbum: async (parent, args) => {
      return Album.create(
        args,
        {
          new: true,
          runValidators: true,
        }
      )
    },
    updateUser: async (parent, args) => {
      return User.findOneAndUpdate(
        { _id: args.id },
        args,
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updatePost: async (parent, args) => {
      return Post.findOneAndUpdate(
        { _id: args.id },
        args,
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateAlbum: async (parent, args) => {
      return Album.findOneAndUpdate(
        { _id: args.id },
        args,
        {
          new: true,
          runValidators: true,
        }
      );
    }
  }
};

module.exports = resolvers;