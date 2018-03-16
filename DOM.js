(function() {
	var giphyKey = config.giphyKey;
	var musicKey = config.musicKey;

	var playlistTitle = '';
	var gifResult = ''; //this will have the URL of the gif
	var musicResult = []; // have object with the 10 titles and artist names

	// -- DOM / REQUEST FUNCTIONS --
	document.querySelector('.forms__input').focus();
	logic.addListener('#js-submit', 'submit', function(event) {
		event.preventDefault();
		var input = event.target[0].value; // use input to adjust the URL to what needed

		// URLs and Data Fetching
		var urlGiphy =
			'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=' + giphyKey;
		var urlMusic =
			'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=' +
			input +
			'&f_lyrics_language=en&f_has_lyrics=1&s_artist_rating=desc&s_track_rating=desc&page_size=100&apikey=' +
			musicKey; // uses cors-anywhere proxy to prevent CORS errors

		//TITLE
		playlistTitle = input;

		//GIF
		logic.fetch(urlGiphy, logic.selectGif, displayGif);

		//MUSIC
		logic.fetch(urlMusic, logic.selectMusic, displayMusic);

		//DOES WHAT IS SAYS
		displayTitle(playlistTitle);
	});

	// -- DOM MANIPULATE FUNCTIONS --
	// Use code to adjust the empty h2 with the playlist name using var playlistTitle

	// Use gifResult to manipulate DOM
	function displayGif(gif) {
		gifResult = gif;
		var img = document.querySelector('#js-gif');
		img.src = gifResult;
		img.classList.remove('is--hidden');
	}

	// Use musicResult to manipulate DOM
	function displayMusic(music) {
		musicResult = music;

		// refreshes tracklist for repeadted searches
		var tracklist = document.querySelector('#js-tracklist');
		while (tracklist.firstChild) {
			tracklist.removeChild(tracklist.firstChild);
		}

		musicResult.forEach(function(trackObj) {
			var track = document.createElement('li');

			var title = document.createElement('span');
			title.classList.add('mixtape__trackTitle')
			title.textContent = trackObj.track;
			track.appendChild(title);

			var artist = document.createElement('span');
			artist.classList.add('mixtape__trackArtist')
			artist.textContent = trackObj.artist;
			track.appendChild(artist);

			tracklist.appendChild(track);
		});
	}

	function displayTitle(title) {
		var titleDiv = document.querySelector('#js-title');
		document.querySelector('#js-title');
		var mixTapeTitle = document.querySelector('#js-playlist-name');
		mixTapeTitle.textContent = playlistTitle;
		titleDiv.classList.remove('is--hidden');
	}
	//STRETCH GOAL!!!!!!!
	// Once DOM manipulated: reset (on page reload)??
})();
