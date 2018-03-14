(function () {
  var gifResult = ''; //this will have the URL of the gif 
  var musicResult = [];  // have object with the 10 titles and artist names
  var playlistTitle = '';

  // -- DOM / REQUEST FUNCTIONS --

  // Ties in functions from logic into here

  logicFunctions.addListener('#js-submit', 'submit', function (event) {
    // Add in functions that generates the correct URL
    playlistTitle = event.target[0].value;
    // use playlistTitle to adjust the URL to what needed
    var UrlGiphy = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
    var UrlMusic = "";

    gifResult = logicFunctions.fetch(UrlGiphy, selectGif);
    musicResult = logicFunctions.fetch(UrlGiphy, selectMusic);

  })



  // -- DOM MANIPULATE FUNCTIONS --
  // Use code to adjust the empty h2 with the playlist name using var playlistTitle

  // Use gifResult to manipulate DOM

  // Use musicResult to manipulate DOM

  // Once DOM manipulated: reset (on page reload)??
})();