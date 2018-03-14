// -- DOM / REQUEST FUNCTIONS --

//   Add listener
var logic = {
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
        // processes the response
        // takes in raw response
        // select Gif takes as an object, the response object
        // return a URL string of one gif from the response object
    },

    // Music

    selectMusic: function(response) {
       var result = [];
       var allTracks = response.message.body.track_list;
       allTracks.forEach(function(item) {
           var trackItem = {
               'artist': '',
               'track': ''
           };
           trackItem.artist = item.track.artist_name;
           trackItem.track = item.track.track_name;
           return result.push(trackItem);
        });

       return result.slice(0, 10);
        // processes the response
        // takes in raw response
        // return an array of 10 objects or less
        // - for each item: has two properties (has the artist name and the title of track)
    }
}

if (typeof module !== "undefined") {
    module.exports = logic;
}