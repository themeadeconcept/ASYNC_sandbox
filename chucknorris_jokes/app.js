// Grab the button
document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  // Get the number of jokes
  const number = document.querySelector('input[type="number"]').value;

  // Prepare AJAX / XHR Request
  const xhr = new XMLHttpRequest();

  // GET request and set to true to make asynchronous
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    //checks if code status is good to go
    if (this.status === 200) {
      // parses JSON data to readable text
      const response = JSON.parse(this.responseText);

      // initiate empty output for data manipulation
      let output = "";

      if (response.type === "success") {
        // You cannot use forEach on an object, .value will give you the nested arrays
        // joke represents the current iteration
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Something went wrong</li>";
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
