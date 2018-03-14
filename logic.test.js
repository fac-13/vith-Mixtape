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

// musicFunctions.[function name]