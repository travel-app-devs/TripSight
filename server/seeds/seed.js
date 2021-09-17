const db = require('../config/connection');
const { User, Post, Album } = require('../models');

// const userData = require('./userData.json');
const postData = require('./postData.json');
// const albumData = require('./albumData.json');


db.once('open', async () => {
  // clean database
  await Post.deleteMany({});
  // await User.deleteMany({});
  // await Album.deleteMany({});

  // bulk create each model
  // const users = await User.insertMany(userData);
  const posts = await Post.insertMany(postData);
  // const albums = await Album.insertMany(albumData);

  console.log('all done!');
  process.exit(0);
});