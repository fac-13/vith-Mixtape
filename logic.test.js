var test = require('tape');
var logic = require('./logic');
var dummies = require('./logic.data.dummy');
var giphyDummy = dummies.giphyDummy;
var musicDummy = dummies.musicDummy;

test('Testing Tape is working', function(t) {
	t.equal(1, 1, 'One should equal one');
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
    let actual = giphyDummy.data[0].images.original.url;
    let expected = "https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
    t.deepEqual(actual, expected, "url should equal https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif")
    t.end();
});

test("Testing logic.selectGif returns expected url", function(t) {
    let actual = logic.selectGif(giphyDummy);
    let expected = "https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
    t.deepEqual(actual, expected, "url should equal https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif")
    t.end();
});







// giphyFunction.[function name]

// Music code
test('Testing musicDummy is imported', function(t) {
	if (typeof musicDummy === 'object') {
		t.pass('musicDummy is imported and an object');
	} else {
		t.fail('musicDummy is not imported or not an object');
	}
	t.end();
});
test('Testing selectMusic returns an array', function(t) {
	var actual = logic.selectMusic(musicDummy);
	if (Array.isArray(actual)) {
		t.pass('selectMusic returns an array');
	} else {
		t.fail("selectMusic doesn't return an array");
	}
	t.end();
});
test('Testing selectMusic returns array of objects', function(t) {
	var actual = logic.selectMusic(musicDummy);
	if (actual.every(x => typeof x === 'object')) {
		t.pass('selectMusic returns an array of objects');
	} else {
		t.fail('selectMusic returned array does not contain objects');
	}
	t.end();
});
test('Testing selectMusic returns no more than ten songs', function(t) {
	var actual = logic.selectMusic(musicDummy);
	if (actual.length <= 10) {
		t.pass('selectMusic returns no more than ten songs');
	} else {
		t.fail('selectMusic returns more than 10 songs');
	}
	t.end();
});
test('Testing selectMusic - each object within array  has a length of 2', function(t) {
	var actual = logic.selectMusic(musicDummy);
	if (
		actual.every(function(x) {
			return Object.keys(x).length === 2;
		})
	) {
		t.pass('selectMusic - each object within array has a length of 2');
	} else {
		t.fail(
			'selectMusic - each object within array does not have a length of 2'
		);
	}
	t.end();
});

/// NOTE! MUSIC TESTS NEED A DEEP EQUALS - DEEP EQUAL EXPECTED DUMMY EXISTS IN DUMMY FILE ALREADY

