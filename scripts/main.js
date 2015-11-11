// Generate a random groove and apply a random song to layer the groove over

// Prompt user selection of fatback type
  // choices are limited to 'duple meter' and 'triple meter'

var fatBackMin = 1;
var fatBackMax = 16;
var timePatternMin = 1;
var timePatternMax = 22;
var songMin = 1;
var songMax = 88;

function randomNumber (minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - 1) + minNum)
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
  $('.song-number').text(randomSong);
}
var clearFBSequence = function() {
  $('.timing-pattern').removeClass("hidden");
  $('.fb-sequence').removeClass("hidden");
  $('.song-recommendation').removeClass("hidden");
  $('.description').removeClass("hidden");
}
var displayFBSequence = function(){
  clearFBSequence();
  generateTimeAPattern();
  generateFBRandoms();
  songRecommendation();
}

$('button').on("click", displayFBSequence);

  