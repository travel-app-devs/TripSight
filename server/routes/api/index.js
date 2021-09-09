const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes.js');
const albumRoutes = require('./album-routes.js');

router.use('/album', albumRoutes);
router.use('/post', postRoutes);
router.use('/user', userRoutes);

module.exports = router;