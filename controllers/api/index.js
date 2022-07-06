const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./blogPostRoutes');

router.use('/users', userRoutes);
router.use('/blogPost', blogPostRoutes);

module.exports = router;
