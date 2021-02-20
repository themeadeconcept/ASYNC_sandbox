document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object - Instantiate like every normal object
  const xhr = new XMLHttpRequest();

  // OPEN - get request for data.txt
  // call open, get request, and file (data.txt)
  xhr.open("GET", "data.txt");

  // logs ready state
  // console.log("READYSTATE", xhr.readyState);

  // Optional - used for spinners / loaders
  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState);
  };

  // Do what we want to do with the data
  xhr.onload = function () {
    // logs readystate
    console.log("READYSTATE", xhr.readyState);

    // if the status code is 200
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhr.onerror = function () {
    console.log("Request error...");
  };

  // actually sends the data
  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
