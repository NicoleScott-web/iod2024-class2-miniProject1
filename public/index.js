let posts = [];

function render() {
  // clone the template
  document.querySelector("#card-list").innerHTML = "";
  posts.forEach((item, i) => {
    const template = document
      .getElementById("postTemplate")
      .content.cloneNode(true);
    // populate the template
    console.log("item", item);
    template.querySelector(".card-title").innerText = item.Fristname;
    template.querySelector(".card-title2").innerText = item.Lastname;
    template.querySelector(".card-post-body").innerText = item.Region;
    template.querySelector(".card-post-body2").innerText = item.Sales;
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
 
    template.querySelector(".card-remove2").addEventListener("click", () => {
      fetch(`/posts/${item.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //changeinputtype or create new form then post value of form to body
        method: "PUT",
        body: JSON.stringify({ Fristname: "my update", Region: "my region" }),
      }).then((res) => {
        res.json().then((res) => {
          const post = res.result;
          console.log("post", post);
          const idIndex = posts
            .map((post) => post.id.toString())
            .indexOf(post.id.toString());

          posts.splice(idIndex, 1, post);
          render();
        });
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
  const Fristname = document.getElementById("titleInput").value;
  const Lastname = document.getElementById("titleInput2").value;
  const Region = document.getElementById("titleInput3").value;
  const Sales = document.getElementById("bodyInput2").value;
 
  fetch("/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Fristname, Lastname, Region, Sales }),
  }).then((res) => {
    res.json().then((res) => {
      const post = res.result;
      posts.push(post);
      render();
    });
  });
  
}
