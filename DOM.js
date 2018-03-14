(function () {
  var giphyKey = config.giphyKey;
  var musicKey = config.musicKey;

  var gifResult = ''; //this will have the URL of the gif 
  var musicResult = [];  // have object with the 10 titles and artist names
  var playlistTitle = '';

  // -- DOM / REQUEST FUNCTIONS --

  // Ties in functions from logic into here

  logicFunctions.addListener('#js-submit', 'submit', function (event) {
    // Add in functions that generates the correct URL
    var input = event.target[0].value;
    playlistTitle = input;
    // use playlistTitle to adjust the URL to what needed
    // use API keys
    var urlGiphy = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + giphyKey;
    var urlMusic = "" + musicKey;

    gifResult = logic.fetch(urlGiphy, selectGif);
    musicResult = logic.fetch(urlGiphy, selectMusic);

  })

  // -- DOM MANIPULATE FUNCTIONS --
  // Use code to adjust the empty h2 with the playlist name using var playlistTitle

  // Use gifResult to manipulate DOM

  // Use musicResult to manipulate DOM

  // Once DOM manipulated: reset (on page reload)??
})();