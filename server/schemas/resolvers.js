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
  },
  Mutation: {
    // createMatchup: async (parent, args) => {
    //   const matchup = await Matchup.create(args);
    //   return matchup;
    // },
    // createVote: async (parent, args => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     args._id,
    //     args,
    //     { new: true }
    //   );
    //   return vote;
    // },
  },
};

module.exports = resolvers;