const express = require("express");
const {
  getPosts,
  addPost,
  deletePost,
} = require("../controller/postController");
const router = express.Router();

router.get("/", (req, res) => {
  const posts = getPosts();
  res.send({ result: posts });
});

router.post("/", (req, res) => {
  const body = req.body;
  //find out max id in current posts
  const post = addPost(body);
  res.send({ result: post });
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    deletePost(id);
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
});

module.exports = router;
