const router = require('express').Router();
const {
  getAllPosts,
  createPost,
  getPost,
  getAlbumPosts,
  updatePost,
} = require('../../controllers/post-controllers');

router.route('/').get(getAllPosts);
router.route('/').post(createPost);
router.route('/:id').get(getPost);
router.route('/:id').put(updatePost);
router.route('/:id').put(getAlbumPosts);

module.exports = router;