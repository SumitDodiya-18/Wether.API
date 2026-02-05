let commentsBox = document.getElementById("commentsBox");

let users = [];
let index = 0;

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => {
    users = data;
  })
  .catch((err) => {
    console.log(err);
  });

let fetchComments = () => {
  if (index < users.length) {
    let user = users[index];

    commentsBox.innerHTML = `
      <div class="card">
        <h4 id="userid">ID: ${user.id}</h4>
        <p><b>Name:</b> ${user.name}</p>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Comment:</b> ${user.body}</p>
      </div>
    `;

    index++;
  } else {
    commentsBox.innerHTML = "<h3>No more users</h3>";
  }
};

