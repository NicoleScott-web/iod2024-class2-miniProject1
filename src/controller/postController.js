const posts = [
  { id: 1, Fristname: "George", Lastname: "Findlay", Region: "East Auckland", Sales: 4780  },
  { id: 2, Fristname: "Harry", Lastname: "Selster", Region: "South Auckland", Sales: 4506  },
  { id: 3, Fristname: "Jerry", Lastname: "Timons", Region: "West Auckland", Sales: 340  },
  { id: 4, Fristname: "Durtry", Lastname: "Blotex", Region: "North Auckland", Sales: 1360  },
  { id: 5, Fristname: "Wilson", Lastname: "Notley", Region: "South Island", Sales: 4506 },
  { id: 6, Fristname: "Bob", Lastname: "Shoor", Region: "Waikato", Sales: 3280},
  { id: 7, Fristname: "Kaitlin", Lastname: "Jowry", Region: "East Auckland", Sales: 2300 },
];

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
const editPost = (id, post) => {
  const targetPost = posts.find((post) => post.id == id);
  const resultPost = { ...targetPost, ...post };
  const targetPostId = posts.findIndex((post) => post.id == id);
  posts[targetPostId] = resultPost;
  console.log(posts[targetPostId]);
  return resultPost;
};

module.exports = {
  getPosts,
  addPost,
  deletePost,
  editPost,
  posts,
};
