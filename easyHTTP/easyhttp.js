// ES5 Object Oriented Library (Prototypes not classes) / ASYNCHRONOUSLY

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request - DYNAMIC URL is passed in
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  // stores the "this" value, for use beyond it's scope
  let self = this;

  this.http.onload = function () {
    // check if status is 200
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  // stores the "this" value, for use beyond it's scope
  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  // stores the "this" value, for use beyond it's scope
  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request

// Make an HTTP DELETE Request

easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);

  // stores the "this" value, for use beyond it's scope
  let self = this;

  this.http.onload = function () {
    // check if status is 200
    if (self.http.status === 200) {
      callback(null, "Your post has been deleted");
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};
