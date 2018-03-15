(function() {
	var giphyKey = config.giphyKey;
	var musicKey = config.musicKey;

	var loadState = 'empty'; // gifOnly, musicOnly, done
	var playlistTitle = '';
	var gifResult = ''; //this will have the URL of the gif
	var musicResult = []; // have object with the 10 titles and artist names
	var mixTapeContainer = document.querySelector('.main__mixtape'); // onload is--hidden

	document.querySelector('.forms__input').focus(); // gives immediate focus to the form

	// -- DOM / REQUEST FUNCTIONS --

	logic.addListener('#js-submit', 'submit', function(event) {
		event.preventDefault();

		// SHOULD ADD A FORM INPUT RESET HERE TO CLEAR THE FORM FIELD !! - TO DO 

		loadState = 'empty'; // reset the state
		mixTapeContainer.classList.add('is--hidden'); // hides previously displayed result
		var input = event.target[0].value; // user input to adjust the URL for search query

		// URLs and Data Fetching
		var urlGiphy =
			'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=' + giphyKey;
		var urlMusic =
			'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=' + // uses cors-anywhere proxy to prevent CORS errors
			input +
			'&f_lyrics_language=en&f_has_lyrics=1&s_artist_rating=asc&s_track_rating=asc&quorum_factor=1&page_size=100&apikey=' + // changed to 100 results 
			musicKey; 

		//TITLE
		playlistTitle = input;

		//GIF
		logic.fetch(urlGiphy, logic.selectGif, assignGif);

		//MUSIC
		logic.fetch(urlMusic, logic.selectMusic, assignMusic);

	});

	// -- DOM MANIPULATE FUNCTIONS --
	
	// Use gifResult to manipulate DOM
	function assignGif(gif) {
		gifResult = gif;
		if (loadState === 'empty') {
			loadState = 'gifOnly';
		} else if (loadState === 'musicOnly') {
			loadState = 'done';
			displayAll();
		}
	}

	// Use musicResult to manipulate DOM
	function assignMusic(music) {
		musicResult = music;
		if (loadState === 'empty') {
			loadState = 'musicOnly';
		} else if (loadState === 'gifOnly') {
			loadState = 'done';
			displayAll();
		}
	}

	function displayAll() {
		// dsplays playlist title
		var mixTapeTitle = document.querySelector('#js-playlist-name');
		mixTapeTitle.textContent = playlistTitle;

		// displays gif
		var img = document.querySelector('#js-gif');
		img.src = gifResult;
		//img.classList.remove('is--hidden');

		// displays music
		var tracklist = document.querySelector('#js-tracklist');
		while (tracklist.firstChild) {
			tracklist.removeChild(tracklist.firstChild); // refreshes tracklist for repeadted searches
		}
		musicResult.forEach(function(trackObj) {
			var track = document.createElement('li');

			var title = document.createElement('span');
			title.classList.add('mixtape__trackTitle');
			title.textContent = trackObj.track;
			track.appendChild(title);

			var artist = document.createElement('span');
			artist.classList.add('mixtape__trackArtist');
			artist.textContent = trackObj.artist;
			track.appendChild(artist);

			tracklist.appendChild(track);
		});

		// displays ALL
		mixTapeContainer.classList.remove('is--hidden');
	}

})();
