const test = require("tape");
const logic = require("./logic");
const dummies = require("./logic.data.dummy");
const giphyDummy = dummies.giphyDummy;
const musicDummy = dummies.musicDummy;

test("Testing Tape is working", function(t) {
    t.equal(1, 1, "One should equal one");
    t.end();
});

// -- DOM / REQUEST FUNCTIONS --

// DOMFunctions.[function name]

// -- API RESPONSE FUNCTIONS --

// Giphy code
test("Testing giphyDummy is an object", function(t) {
    if (typeof giphyDummy === "object"){
        t.pass("giphyDummy is an object");
    }
    else{t.fail("giphyDummy is not an object")};
    t.end();
});

test("Testing giphyDummy has expected url", function(t) {
    var actual = giphyDummy.data[0].images.original.url;
    var expected = "https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
    t.deepEqual(actual, expected, "url should equal https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif")
    t.end();
});

test("Testing logic.selectGif returns expected url", function(t) {
    var actual = logic.selectGif(giphyDummy);
    var expected = "https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
    t.deepEqual(actual, expected, "url should equal https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif")
    t.end();
});







// giphyFunction.[function name]


// Music code

// musicFunctions.[function name]