(function() {
  var giphyKey = config.giphyKey;
  var musicKey = config.musicKey;

  var playlistTitle = "";
  var gifResult = ""; //this will have the URL of the gif
  var musicResult = []; // have object with the 10 titles and artist names

  // -- DOM / REQUEST FUNCTIONS --

  logic.addListener("#js-submit", "submit", function(event) {
    event.preventDefault();
    var input = event.target[0].value; // use input to adjust the URL to what needed

    // URLs and Data Fetching
    var urlGiphy =
      "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + giphyKey;
    var urlMusic =
      "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=" +
      input +
      "&f_lyrics_language=en&f_has_lyrics=1&s_artist_rating=asc&s_track_rating=asc&quorum_factor=1&page_size=20&apikey=" +
      musicKey; // uses cors-anywhere proxy to prevent CORS errors

    //TITLE
    playlistTitle = input;

    //GIF
    logic.fetch(urlGiphy, logic.selectGif, displayGif);

    //MUSIC
    logic.fetch(urlMusic, logic.selectMusic, displayMusic);
  });

  // -- DOM MANIPULATE FUNCTIONS --
  // Use code to adjust the empty h2 with the playlist name using var playlistTitle

  // Use gifResult to manipulate DOM
  function displayGif(gif) {
    gifResult = gif;
    var img = document.querySelector("#js-gif");
    img.src = gifResult;
  }

  // Use musicResult to manipulate DOM
  function displayMusic(music) {
    musicResult = music;
    var tracklist = document.querySelector("#js-tracklist");

    // refreshes tracklist for repeadted searches
    while (tracklist.firstChild) {
      tracklist.removeChild(tracklist.firstChild);
    }

    musicResult.forEach(function(trackObj) {
      var track = document.createElement("li");

      var title = document.createElement("span");
      title.textContent = trackObj.track;
      track.appendChild(title);

      var artist = document.createElement("span");
      artist.textContent = trackObj.artist;
      track.appendChild(artist);

      tracklist.appendChild(track);
    });
  }
  // Once DOM manipulated: reset (on page reload)??
})();
