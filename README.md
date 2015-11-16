Fatback Generator
=================

[Use The Fatback Generator](http://somecallmejosh.github.io/fatback-generator) to construct new grooves over randomly selected songs.

This is a web app that was born out of a need to practice a seemingly infinite number of variations of what **Gary Chaffee** calls **Fatback Grooves**. These are duple meter grooves, in 4/4 time with the snare on 2 and 4. There are 29 cymbal patterns (hi-hat and ride) and 22 interchangeable one-beat bass drum and snare drum patterns. 

There's not enough time to practice every combination, so I built this generator to take on the task of randomizing patterns that I may never consider on my own. I strongly urge you to [purchase Chaffee's book](http://www.amazon.com/Time-Functioning-Patterns-Book-CD/dp/0769234771/ref=sr_1_1?ie=UTF8&qid=1447286821&sr=8-1&keywords=Gary+Chaffee), especially if you find yourself using the Fatback Generator.

Groove Essentials is a book and audio series by Tommy Igoe. I use these resources regularly in my practice sessions. The goal of this series is to teach drummers different types of world grooves. The great thing is that it comes along with excellent audio tracks. I've included them as another layer of randomness to this generator. Each of the fatback combinations is accomanied by a randomly selected audio track from the Groove Essentials collection that challenges you to play the patterns in a musical setting. The idea is to make the pattern work, regardless of the musical style. Here's an opportunity to get really creative.

**I had no part in the creation of the Groove Essentials series and Time Functioning Patterns books. I benefit in no way by inlucding and/or referencing them in this app.** With that being said, it's safe to assume that lots of hard work was put in to these books and recordings by Tommy Igoe (and that group of amazing musicians) and Gary Chaffee. This is a tool that was inspired by these works and aids in my progress through the material. If you find yourself using this Fatback Generator App to work on the same material, please purchase the associated books and audio. Below are links to purchase them on Amazon, but feel free to buy them from wherever works best for you.

- [Time Function Patterns by Gary Caffee](http://www.amazon.com/Time-Functioning-Patterns-Book-CD/dp/0769234771/ref=sr_1_1?ie=UTF8&qid=1447286821&sr=8-1&keywords=Gary+Chaffee)
- [Groove Essentials 1](http://www.amazon.com/Groove-Essentials-Play-Along-Complete-Encyclopedia/dp/1423406788/ref=sr_1_1?ie=UTF8&qid=1447286628&sr=8-1&keywords=Groove+Essentials)
- [Groove Essentials 2](http://www.amazon.com/Firth-Presents-Groove-Essentials-Tommy/dp/1423464451/ref=sr_1_4?ie=UTF8&qid=1447286628&sr=8-4&keywords=Groove+Essentials)

## TODO
- [x] Add ability to include hybrid grooves (adding the second section of permutations from Chaffe's fatback patterns)
- [x] Create images for each fatback and cymbal pattern, and construct them visually so the user can see the pattern in the app, rather than needing to refer to the book.
- [x] Allow user to select basic or advanced (inludes second section of permutations) groove construction.
- [ ] Differentiate between duple meter and triple meter patterns
  - [ ] List grooves as objects, and add groove type as key value pair
  - [ ] Show Triple Meter Fatbacks for Triple meter Grooves
  - [ ] Show Duple Meter Fatbacks For Duple Meter Grooves

## Would Be Awesome To Have

- [ ] [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) groove construction on the fly so the user can hear the constructed rhythms in addition to seeing the constructed patterns mentioned in the TODO above.
  - Check out [Howler.js](https://github.com/goldfire/howler.js/)
