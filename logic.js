// -- DOM / REQUEST FUNCTIONS --

//   Add listener

function addListener(selector, eventName, input, callback) {
    document.querySelector(selector).addEventListener(eventName, callback);
}

//   Fetch requests

function fetch(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            return callback(response);
        }
    });

    xhr.open('GET', url);
    xhr.send();
}

// -- API RESPONSE FUNCTIONS --

// Giphy 

function selectGif(response) {
    // processes the response
    // takes in raw response
    // select Gif takes as an object, the response object
    // return a URL string of one gif from the response object
}

// Music

function selectMusic(response) {
    // processes the response
    // takes in raw response
    // return an array of 10 objects or less
    // - for each item: has two properties (has the artist name and the title of track)
}
