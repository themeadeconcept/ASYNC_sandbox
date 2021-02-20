// Asynchronous Method using Promises

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

// No long takes in callback
function createPost(post) {
  // Create a Promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      // setting error to false, will make the Promise Resolve.
      // setting error to true, will Make Promise Reject.
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }

      resolve();
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// When we get a Promise Resolve, we handle it with .then
createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  // When we get a Promise Reject, we handle it with .catch (to catch the error)
  .catch(function (err) {
    console.log(err);
  });
