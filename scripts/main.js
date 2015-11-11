// Generate a random groove and apply a random song to layer the groove over

// Prompt user selection of fatback type
  // choices are limited to 'duple meter' and 'triple meter'

var fatBackMax = 16;
var timePatternMax = 25;
var songMax = 91;

function randomNumber (minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - 1) + minNum)
}

function updateAudio(sourceUrl){
  var fastOrSlow = randomNumber(1,3);
  console.log(fastOrSlow);
  var setSpeed;
  if (fastOrSlow == 1){
    setSpeed = '-fast.mp3';
  } else {
    setSpeed = '-slow.mp3'
  }
  var audio = $('.audio-player');
  $('.audio-player').attr("src", 'audio/' + sourceUrl + setSpeed); 
  audio[0].pause();
  audio[0].load();
}

var generateFBRandoms = function() {
  var fatBackA = randomNumber(1, fatBackMax);
  var fatBackB = randomNumber(1, fatBackMax);
  var fatBackC = randomNumber(1, fatBackMax);
  $('.result-a').text(fatBackA);
  $('.result-b').text(fatBackB);
  $('.result-c').text(fatBackC);
}
var generateTimeAPattern = function() {
  var sectionTime = randomNumber(1, timePatternMax);
  $('.recommended-pattern').text(sectionTime);
}
var songRecommendation = function() {
  var randomSong = randomNumber(1, songMax);
  updateAudio(randomSong);
  $('.song-number').text(randomSong);
}
var clearFBSequence = function() {
  $('.timing-pattern, .fb-sequence, .song-recommendation, .description').removeClass("hidden");
}
var displayFBSequence = function(){
  clearFBSequence();
  generateTimeAPattern();
  generateFBRandoms();
  songRecommendation();
}

$('button').on("click", displayFBSequence);

  