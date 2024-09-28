let posts = [];

function render() {
  // clone the template
  document.querySelector("#card-list").innerHTML = "";
  posts.forEach((item, i) => {
    const template = document
      .getElementById("postTemplate")
      .content.cloneNode(true);
    // populate the template
    template.querySelector(".card-title").innerText = item.title;
    template.querySelector(".card-post-body").innerText = item.body;
    // include the populated template into the page
    template.querySelector(".card-remove").addEventListener("click", () => {
      fetch(`/posts/${item.id}`, {
        method: "DELETE",
      }).then(() => {
        const idIndex = posts
          .map((post) => post.id.toString())
          .indexOf(item.id.toString());
        posts.splice(idIndex, 1);
        render();
      });
    });
    document.querySelector("#card-list").appendChild(template);
  });
}

fetch("/posts").then((res) => {
  res.json().then((result) => {
    const resultPosts = result.result;
    posts = [...posts, ...resultPosts];
    render();
  });
});
render();

function onPostSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("titleInput").value;
  const body = document.getElementById("bodyInput").value;
  fetch("/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  }).then((res) => {
    res.json().then((res) => {
      const post = res.result;
      posts.push(post);
      render();
    });
  });
}
