const router = require('express').Router();
const {
  getAllPosts,
  createUser,
  getUser,
  getAllAlbums,
  updateUser,
} = require('../../controllers/user-controllers');

router.route('/').get(getAllPosts);
router.route('/').post(createUser);
router.route('/:id').get(getUser);
router.route('/:id').put(updateUser);
router.route('/:id').put(getAllAlbums);

module.exports = router;