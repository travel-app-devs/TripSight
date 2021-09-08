const { Album } = require('../models');

module.exports = {
  async createAlbum(req, res) {
    const album = await Album.create(req.body);

    if (!album) {
      return res.status(400).json({ message: 'Unable to create album' });
    }

    res.status(200).json(album);
  },
  async updateAlbum(req, res) {
    const update = await Album.findOneAndUpdate(
      { _id: req.body.id },
      req.body,
      { new: true }
    );

    if (!update) {
      return res.status(400).json({ message: 'Unable to update' });
    }

    res.status(200).json(update);
  },
  async getAllAlbums(req, res) {
    const allAlbums = await Album.find({userInfo: {id: req.params.id}});

    if (!allAlbums) {
      return res.status(400).json({ message: 'No albums found' });
    }

    res.status(200).json(allAlbums);
  },
  async getAlbum({ params }, res) {
    const album = await Album.findOne({ _id: params.id });

    if (!album) {
      return res.status(400).json({ message: 'No album found by that id' });
    }

    res.status(200).json(album);
  },
};