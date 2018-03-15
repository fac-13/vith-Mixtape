// -- DOM / REQUEST FUNCTIONS --

var logic = {

    //   Add listener
    addListener: function(selector, eventName, callback) {
        document.querySelector(selector).addEventListener(eventName, callback);
    },
    
    //   Fetch requests
    fetch: function(url, callbackSelect, callbackRender) {
        var xhr = new XMLHttpRequest();
    
        xhr.addEventListener('load', function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var result = callbackSelect(response);
                callbackRender(result)
            } else {
                console.log("XHR error", xhr.readyState)
            }
        });
    
        xhr.open('GET', url);
        xhr.send();
    },


    // -- API RESPONSE FUNCTIONS --

    // Giphy 
    
    selectGif: function(response) {
        // this function returns a URL string
        return response.data[0].images.original.url;
    },

    // Music

    selectMusic: function(response) { // takes in JSON response
       var result = [];
       var allTracks = response.message.body.track_list; 

        // General note: will need to filter out bad tracks (ie Karaoke) from result list, possibly withing the .forEach callback below.
         
        // Note: can forEach be refactored with a .reduce callback to do a comparison and filter out repeated track names?? 

       allTracks.forEach(function(item) { // loops thru JSON data tracklist, extracting artist/track infomation into new object item for results
           var trackItem = {
               'artist': '',
               'track': ''
           };
           trackItem.artist = item.track.artist_name;
           trackItem.track = item.track.track_name;
           return result.push(trackItem); 
        });

        

       return result.slice(0, 10); // return an array of 10 objects or less
    }
}

if (typeof module !== "undefined") {
    module.exports = logic;
}