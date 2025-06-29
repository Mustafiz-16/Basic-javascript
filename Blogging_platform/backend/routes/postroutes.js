const express = require("express");
const router = express.Router();
const verifyUser = require("../middleware/verifyuser.js");
const Post = require("../models/post");
const User = require("../models/user");

// 🔒 Create post (requires login)
router.post("/create", verifyUser, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: user.username
    });

    await post.save();
    res.status(201).json(post); // send full post data (not just message)
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// 🌐 Public: Get all posts (for frontend to show)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

module.exports = router;

