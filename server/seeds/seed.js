const db = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');


db.once('open', async () => {
  // clean database
  await Post.deleteMany({});
  await User.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const posts = await Post.insertMany(postData);

  console.log('all done!');
  process.exit(0);
});