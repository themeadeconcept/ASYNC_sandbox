// Synchronous method of callbacks - events happen at certain times, and post three doesn't render in time, only post one and two

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

// SYNRCHRONOUS METHOD OF CALLBACKS

// function createPost() {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "Post Three", body: "This is post three" });

// getPosts();

// Asynchronous Method of callbacks

//createPost now takes in a callback function (i.e. getPosts)
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    //this DYNAMIC callback will now run BEFORE server finishes it's 2 seconds
    callback();
  }, 2000);
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

// now that createPost takes in a callback function, the posts AND getPosts are rendered ASYNCHRONOUSLY
createPost({ title: "Post Three", body: "This is post three" }, getPosts);

// CALLBACKS are just FUNCTIONS that can be passed into another function and called within that function
