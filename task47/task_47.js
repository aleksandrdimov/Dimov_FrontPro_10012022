const postListItem = document.getElementById("post__list");
const searchInputItem = document.getElementById("search-post");

const API_Posts = "https://jsonplaceholder.typicode.com/posts";
const API_Coments = "https://jsonplaceholder.typicode.com/comments?postId=";

let postsData = [];
let commentsData = [];

const getPosts = () => {
  fetch(API_Posts)
    .then((response) => response.json())
    .then((posts) => {
      postsData = posts;
      renderPostsList(posts);
    })
    .catch((error) => console.error(error));
};

getPosts();

const getComments = () => {
  fetch(API_Coments)
    .then((response) => response.json())
    .then((comments) => {
      commentsData = comments;
      renderCommentsList(comments);
    })
    .catch((error) => console.error(error));
};

getComments();

const renderPostsList = (posts) => {
  postListItem.innerHTML = "";

  posts.forEach((post) => {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post__item");
    postContainer.innerHTML = `<p class='post__id'>id:${post.id}</p><h3 class='post__title'>${post.title}</h3><p class='post__text'>${post.body}</p>`;
    postListItem.appendChild(postContainer);
  });
};

const renderCommentsList = (comments) => {
  const commentsListItem = document.createElement("div");
  commentsListItem.classList.add("comments__list");
  commentsListItem.innerHTML = "";

  comments.forEach((comment) => {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment__item");
    commentContainer.innerHTML = `<p class='comment__id'>post id:${comment.postId}</p><h3 class='comment__title'>${comment.name}</h3>
    <p class='comment__email'>${comment.email}</p>
    <p class='comment__text'>${comment.body}</p>`;

    commentsListItem.appendChild(commentContainer);
  });
  postListItem.appendChild(commentsListItem);
};

searchInputItem.addEventListener("input", (event) => {
  const error = document.querySelector(".error");
  error.classList.remove("js-active");
  const searchTerm = event.target.value;

  const filteredPosts = postsData.filter((post) => post.id == searchTerm);
  const filteredComments = commentsData.filter(
    (comment) => comment.postId == searchTerm
  );
  if (+searchTerm >= 1 && +searchTerm <= 100) {
    renderPostsList(filteredPosts);
    createButtonComments();
    renderCommentsList(filteredComments);
  } else if (searchTerm === "") {
    getPosts();
  } else {
    getPosts();
    error.classList.add("js-active");
  }
});

const createButtonComments = () => {
  const postItem = document.querySelector(".post__item");
  const buttonComments = document.createElement("button");
  buttonComments.classList.add("button__comments");
  buttonComments.innerHTML = `<span class='button__show js-active'>Show comments</span><span class='button__hide'>Hide comments</span>`;
  postItem.appendChild(buttonComments);

  buttonComments.addEventListener("click", () => {
    const showComments = document.querySelector(".button__show");
    const hideComments = document.querySelector(".button__hide");
    const commentItems = document.querySelectorAll(".comment__item");
    showComments.classList.toggle("js-active");
    hideComments.classList.toggle("js-active");

    commentItems.forEach((el) => {
      el.classList.toggle("js-active");
    });
  });
};
