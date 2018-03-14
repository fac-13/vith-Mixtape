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
test("Testing giphyDummy is imported", function(t) {
    if (typeof giphyDummy === "object"){
        t.pass("giphyDummy is imported");
    }
    else{t.fail("giphyDummy is not imported")};
    t.end();
});
// giphyFunction.[function name]


// Music code
test("Testing musicDummy is imported", function(t) {
    if (typeof musicDummy === "object"){
        t.pass("musicDummy is imported and an object");
    }
    else{t.fail("musicDummy is not imported or not an object")};
    t.end();
});
test("Testing selectMusic returns an array", function(t) {
    var actual = logic.selectMusic(musicDummy);
    if (Array.isArray(actual)){
        t.pass("selectMusic returns an array");
    }
    else{t.fail("selectMusic doesn't return an array")};
    t.end();
});
test("Testing selectMusic returns array of objects", function(t) {
    var actual = logic.selectMusic(musicDummy);
    if (actual.every((x) => typeof x === 'object')){
        t.pass("selectMusic returns an array of objects");
    }
    else{t.fail("selectMusic returned array does not contain objects")};
    t.end();
});
test("Testing selectMusic returns no more than ten songs", function(t) {
    var actual = logic.selectMusic(musicDummy);
    console.log(actual.length);
    if (actual.every((x) => typeof x === 'object')){
        t.pass("selectMusic returns no more than ten songs");
    }
    else{t.fail("selectMusic returns more than 10 songs")};
    t.end();
});
