// Generate a random groove and apply a random song to layer the groove over

// Prompt user selection of fatback type
  // choices are limited to 'duple meter' and 'triple meter'

var fatBackMin = 1;
var fatBackMax = 17;
var timePatternMin = 1;
var timePatternMax = 23;
var songMin = 1;
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
  var fatBackA = randomNumber(fatBackMin, fatBackMax);
  var fatBackB = randomNumber(fatBackMin, fatBackMax);
  var fatBackC = randomNumber(fatBackMin, fatBackMax);
  $('.result-a').text(fatBackA);
  $('.result-b').text(fatBackB);
  $('.result-c').text(fatBackC);
}
var generateTimeAPattern = function() {
  var sectionTime = randomNumber(timePatternMin, timePatternMax);
  $('.recommended-pattern').text(sectionTime);
}
var songRecommendation = function() {
  var randomSong = randomNumber(timePatternMin, timePatternMax);
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

  