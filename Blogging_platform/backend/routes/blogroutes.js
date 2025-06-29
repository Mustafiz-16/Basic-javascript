const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogcontroller.js');

router.get('/blogs', blogController.getAllBlogs);
router.post('/blogs', blogController.createBlog);

module.exports = router;
