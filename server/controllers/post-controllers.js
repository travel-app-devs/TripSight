const { Post } = require('../models');

module.exports = {
  async createPost(req, res) {
    const post = await Post.create(req.body);

    if (!post) {
      return res.status(400).json({ message: 'Unable to create post' });
    }

    res.status(200).json(post);
  },
  async updatePost(req, res) {
    const update = await Post.findOneAndUpdate(
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
  async getAlbumPosts(req, res) {
    const allAlbumPosts = await Post.find({albumId: req.params.id});

    if (!allAlbumPosts) {
      return res.status(400).json({ message: 'No posts found' });
    }

    res.status(200).json(allAlbumPosts);
  },
  async getPost({ params }, res) {
    const post = await Post.findOne({ _id: params.id });

    if (!post) {
      return res.status(400).json({ message: 'No post found by that id' });
    }

    res.status(200).json(post);
  },
};