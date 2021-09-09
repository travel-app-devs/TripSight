const { User, Post, Album } = require('../models');

module.exports = {
  async createUser(req, res) {
    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).json({ message: 'Unable to create user' });
    }

    res.status(200).json(user);
  },
  async updateUser(req, res) {
    const update = await User.findOneAndUpdate(
      { _id: req.body.id },
      req.body,
      { new: true }
    );

    if (!update) {
      return res.status(400).json({ message: 'Unable to update' });
    }

    res.status(200).json(update);
  },
  async getAllPosts(req, res) {
    const allPosts = await Post.find({userInfo: {id: req.params.id}});

    if (!allPosts) {
      return res.status(400).json({ message: 'No posts found' });
    }

    res.status(200).json(allPosts);
  },
  async getAllAlbums(req, res) {
    const allAlbums = await Album.find({userInfo: {id: req.params.id}});

    if (!allAlbums) {
      return res.status(400).json({ message: 'No albums found' });
    }

    res.status(200).json(allAlbums);
  },
  async getUser({ params }, res) {
    const user = await User.findOne({ _id: params.id });

    if (!user) {
      return res.status(400).json({ message: 'No user found by that id' });
    }

    res.status(200).json(user);
  },
};