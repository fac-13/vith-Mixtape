# Mixtape generator!

Team VITH has made a mixtape generator for the mix generation 👏🎧
Try it out [here](https://fac-13.github.io/vith-Mixtape/)
Input a keyword or a phrase - and it will return a mixtape playlist containing a relevant Giphy (for your mixtape cover) and your playlist (the first ten or less songs with lyrics containing your keyword/phrase as deemed by [MusixMatch](https://www.musixmatch.com/)).

## What we've done
* We used two APIs: [Giphy API](https://developers.giphy.com/) - for the most relevant gif based on the search - and the [MusixMatch API](https://www.musixmatch.com/) - for the relevant songs based on the search terms.

### Day One
We brain stormed ideas on what APIs to use - and settled for the Giphy one (since we already did a workshop on it) and the MusixMatch one (a recommended one to use). 

We had a look at the API documentation, made API keys and set up a `config` file so that the API keys were hidden on GitHub.

### Day Two
We drew on the whiteboard to brainstorm our Software Architecture:

![our Software Architecture](https://i.imgur.com/qBC2ucJ.jpg)

So we decided to have one logic.js file, a test file, DOM.js file (to connect the logic functions and DOM together), HTML and CSS files. The bottom flow chart demonstrates what would happen after the user submits, and which functions should be in which files.

We then huddled around and did skeleton code ☠️- we worked out our file structure, and started writing code (mainly creating the sections, writing comments, have `module.export` and using `.require` to link up all the different files and functions together.

We then split into two pairs. Both pairs worked on the logic file first, and we both implemented the TDD methodology. We did test doubles (where we copied the output of the API requests into the dummy test file, rather than having an API request each time the tests ran). One pair focused on the Giphy whilst the other pair focused on the MusixMatch API. The Giphy pair finished and then focused on the DOM.js file (and linking up the result with the DOM).

### Day Three
We explained code to each other, made pull requests and agreed on the next steps. We did a Technical Spike on callbacks, to fix an issue where code would run before the API response was returned.

We swapped pairs. One pair then continued on the music API (attempting to filter out duplicate results and 'instrumental' and 'cover' etc tracks. The other pair focused more on the DOM.js and linked up the result of the Giphy API and MusixMatch API to the DOM.
After lunch we swapped pairs again. One pair finished the Music filtering and testing, whilst the other pair finished DOM.js and attempted to add a `render` function.

## What we did well
- TDD, swapping pairs, software architecture, planning, skeleton code, explaining code to each other

## What we struggled with
- `render` function, filtering duplicates, callbacks, cleaning up the API response data, not using ES6
