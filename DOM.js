(function () {
  var giphyKey = config.giphyKey;
  var musicKey = config.musicKey;

  var playlistTitle = '';
  var gifResult = ''; //this will have the URL of the gif 
  var musicResult = [];  // have object with the 10 titles and artist names

  // -- DOM / REQUEST FUNCTIONS --
 
  // Ties in functions from logic into here

  logic.addListener('#js-submit', 'submit', function (event) {

    event.preventDefault();
    var input = event.target[0].value;
    // use input to adjust the URL to what needed
    // use API keys
    
    var urlGiphy = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + giphyKey;
    // var urlMusic = "" + musicKey;

    //TITLE
    playlistTitle = input;

    //GIF
    gifResult = logic.fetch(urlGiphy, logic.selectGif);
    // !THIS IS UNDEFINED
    console.log(logic.fetch(urlGiphy, logic.selectGif));

    // THIS WILL BE MOVED TO RENDER FUNC:
    // var img = document.querySelector('.gif');
    // img.src = gifResult;


    // MUSIC
    // musicResult = logic.fetch(urlGiphy, selectMusic);

  })

  // -- DOM MANIPULATE FUNCTIONS --
  // Use code to adjust the empty h2 with the playlist name using var playlistTitle

  // Use gifResult to manipulate DOM

  // Use musicResult to manipulate DOM

  // Once DOM manipulated: reset (on page reload)??
})();