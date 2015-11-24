Fatback Generator
=================

[Use The Fatback Generator](http://somecallmejosh.github.io/fatback-generator) to construct new grooves over randomly selected songs.

This is a web app that was born out of a need to practice a seemingly infinite number of variations of what **Gary Chaffee** calls **Fatback Grooves**. These are duple meter grooves, in 4/4 time with the snare on 2 and 4. There are 29 cymbal patterns (hi-hat and ride) and 22 interchangeable one-beat bass drum and snare drum patterns. 

There's not enough time to practice every combination, so I built this generator to take on the task of randomizing patterns that I may never consider on my own. I strongly urge you to [purchase Chaffee's book](http://www.amazon.com/Time-Functioning-Patterns-Book-CD/dp/0769234771/ref=sr_1_1?ie=UTF8&qid=1447286821&sr=8-1&keywords=Gary+Chaffee), especially if you find yourself using the Fatback Generator.


## TODO
- [x] Add ability to include hybrid grooves (adding the second section of permutations from Chaffe's fatback patterns)
- [x] Create images for each fatback and cymbal pattern, and construct them visually so the user can see the pattern in the app, rather than needing to refer to the book.
- [x] Allow user to select basic or advanced (inludes second section of permutations) groove construction.
- [x] Integrate Youtube API to randomly call a drumless playalong track from a specified playlist.


## Future Plans

- [ ] Differentiate between duple meter and triple meter patterns
  - [ ] Show Triple Meter Fatbacks for Triple meter Grooves
  - [ ] Show Duple Meter Fatbacks For Duple Meter Grooves

- [ ] [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) groove construction on the fly so the user can hear the constructed rhythms in addition to seeing the constructed patterns mentioned in the TODO above. If anyone is interested in helping out with this, please feel free to submit a PR. I'd love to see where we can take this. Could be really neat.
  - Check out [Howler.js](https://github.com/goldfire/howler.js/)
