// -- DOM / REQUEST FUNCTIONS --

var logic = {
  //   Add listener
  addListener: function(selector, eventName, callback) {
    document.querySelector(selector).addEventListener(eventName, callback);
  },

  //   Fetch requests
  fetch: function(url, callbackSelect, callbackRender) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var result = callbackSelect(response);
        callbackRender(result);
      } else {
        console.log("XHR error", xhr.readyState);
      }
    });

    xhr.open("GET", url);
    xhr.send();
  },

  // -- API RESPONSE FUNCTIONS --

  // Giphy

  selectGif: function(response) {
    // this function returns a URL string
    return response.data[0].images.original.url;
  },

  // Music

  selectMusic: function(response) {
    // takes in JSON response
    var result = [];
    var allTracks = response.message.body.track_list;

    // General note: will need to filter out bad tracks (ie Karaoke) from result list, possibly withing the .forEach callback below.

    // Note: can forEach be refactored with a .reduce callback to do a comparison and filter out repeated track names??

    allTracks.forEach(function(item) {
      // loops thru JSON data tracklist, extracting artist/track infomation into new object item for results
      var trackName = item.track.track_name;
      if (
        trackName
          .toLowerCase()
          .includes(
            "karaoke" ||
              "version" ||
              "orchestral" ||
              "acoustic" ||
              "cover" ||
              "copy" ||
              "instrumental" ||
              "acapella"
          )
      ) {
        return;
      } else {
        var trackItem = {
            artist: item.track.artist_name,
            track: trackName
        };
        return result.push(trackItem);
      }
    });

    return result; // return an array of 10 objects or less
  },

  filterMusic: function(array, key) {
        var seen = [];
      
        var result =  array.filter(function (obj) {
      
            var val = obj[key].toLowerCase();
            if (seen.indexOf(val) == -1) { 
                seen.push(val);
                return true;
                } else {
                return false;
                }
      
        });
        return result.slice(0, 10);
      }
      };

if (typeof module !== "undefined") {
  module.exports = logic;
}
