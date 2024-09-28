const posts = [];

const getPosts = () => {
  return posts;
};
const addPost = (post) => {
  //find out max id in current posts
  const nextId =
    posts.length === 0 ? 1 : Math.max(...posts.map((post) => post.id)) + 1;
  const resultPost = { ...post, id: nextId };
  posts.push(resultPost);
  return resultPost;
};
const deletePost = (id) => {
  const idIndex = posts.map((post) => post.id.toString()).indexOf(id);
  if (idIndex < 0) throw new Error();
  posts.splice(idIndex, 1);
};

module.exports = {
  getPosts,
  addPost,
  deletePost,
};
