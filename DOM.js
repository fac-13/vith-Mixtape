(function() {
	var giphyKey = config.giphyKey;
	var musicKey = config.musicKey;

	var playlistTitle = '';
	var gifResult = ''; //this will have the URL of the gif
	var musicResult = []; // have object with the 10 titles and artist names

	// -- DOM / REQUEST FUNCTIONS --

	logic.addListener('#js-submit', 'submit', function(event) {
		event.preventDefault();
		var input = event.target[0].value; // use input to adjust the URL to what needed
    
    // URLsuse API keys
		var urlGiphy =
			'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=' + giphyKey;
		// var urlMusic = "" + musicKey;

		//TITLE
		playlistTitle = input;

		//GIF
		logic.fetch(urlGiphy, logic.selectGif, displayGif);

		//MUSIC
    //logic.fetch(urlMusic, logic.selectMusic, displayMusic);
    
	});

	// -- DOM MANIPULATE FUNCTIONS --
	// Use code to adjust the empty h2 with the playlist name using var playlistTitle

	// Use gifResult to manipulate DOM
	function displayGif(gif) {
		gifResult = gif;
		var img = document.querySelector('#js-gif');
		img.src = gifResult;
	}

	// Use musicResult to manipulate DOM
	function displayMusic(music) {
		musicResult = music;
		var tracklist = document.querySelector('#js-tracklist');
		musicResult.forEach(function(trackObj) {
			var track = document.createElement('li');
			
			var title = document.createElement('span');
			title.textContent =  trackObj.track;
			track.appendChild(title);

			var artist = document.createElement('span');
			artist.textContent =  trackObj.artist;
			track.appendChild(artist);

			tracklist.appendChild(track);
		})
	};
  // Once DOM manipulated: reset (on page reload)??
  
})();
