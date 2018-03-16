// -- DOM / REQUEST FUNCTIONS --

var logic = {
	//   Add listener
	addListener: function(selector, eventName, callback) {
		document.querySelector(selector).addEventListener(eventName, callback);
	},

	//   Fetch requests
	fetch: function(url, callbackSelect, callbackRender) {
		var xhr = new XMLHttpRequest();

		xhr.addEventListener('load', function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var response = JSON.parse(xhr.responseText);
				var result = callbackSelect(response);
				callbackRender(result);
			} else {
				console.log('XHR error', xhr.readyState);
			}
		});

		xhr.open('GET', url);
		xhr.send();
	},

	// -- API RESPONSE FUNCTIONS --

	// Giphy

	selectGif: function(response) {
		// this function returns a URL string
		var imageData = response.data;
		// .find method search image data for square gif before returning.
		var findSquare = imageData.find(function(item){
			if(item.images.original.width === item.images.original.height){
				return true;
			};
		});
		if(findSquare){
			return findSquare.images.original.url;
		} else {
			return response.data[0].images.original.url;
		}
		
	},

	// Music

	selectMusic: function(response) {
		// takes in JSON response
		var result = [];
		var allTracksData = response.message.body.track_list;

		allTracksData.forEach(function(itemData) {
			// loops thru JSON data tracklist, extracting artist/track infomation into new object itemData for results
			var trackName = itemData.track.track_name;
			if (trackName.toLowerCase().match(/karaoke|version|orchestral|acoustic|remaster|cover|copy|instrumental|acapella|in the style of|original/)) {
				return;
			  } else {
				var trackSelected = {
								  artist: itemData.track.artist_name,
								  track: trackName
							  };
				return result.push(trackSelected);
			  }
		});

    result = logic.filterMusic(result, 'track');
    result = logic.filterMusic(result, 'artist');
    return result.slice(0, 10); // return an array of 10 objects or less
    
	},

	filterMusic: function(array, key) {
		var seen = [];

		var filteredArr = array.filter(function(obj) {
			var val = obj[key].toLowerCase();
			if (seen.indexOf(val) == -1) {
				seen.push(val);
				return true;
			} else {
				return false;
			}
		});
		return filteredArr;
	}
};


if (typeof module !== "undefined") {
  module.exports = logic;
}
