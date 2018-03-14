// -- DOM / REQUEST FUNCTIONS --

//   Add listener
const logic = {
    addListener: function(selector, eventName, input, callback) {
        document.querySelector(selector).addEventListener(eventName, callback);
    },
    
    //   Fetch requests
    fetch: function(url, callback) {
        var xhr = new XMLHttpRequest();
    
        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                return callback(response);
            }
        });
    
        xhr.open('GET', url);
        xhr.send();
    },


    // -- API RESPONSE FUNCTIONS --

    // Giphy 
    selectGif: function(response) {
        return response.data[0].images.original.url;;
    },

    // Music

    selectMusic: function(response) {
        // processes the response
        // takes in raw response
        // return an array of 10 objects or less
        // - for each item: has two properties (has the artist name and the title of track)
    }
}

if (typeof module !== "undefined") {
    module.exports = logic;
}