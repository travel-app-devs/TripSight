const router = require('express').Router();
const {
  getAllAlbums,
  createAlbum,
  getAlbum,
  updateAlbum,
} = require('../../controllers/album-controllers');

router.route('/').get(getAllAlbums);
router.route('/').post(createAlbum);
router.route('/:id').get(getAlbum);
router.route('/:id').put(updateAlbum);

module.exports = router;