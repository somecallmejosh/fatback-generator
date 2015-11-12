// Generate a random groove and apply a random song to layer the groove over

// Prompt user selection of fatback type
  // choices are limited to 'duple meter' and 'triple meter'

// Set Constants
var timePatternMax = 25;
var songMax = 91;
var $audioPlayer = document.querySelector('.audio-player');
var $songNumber = document.querySelector('.song-number');
var $recommendedPattern = document.querySelector('.recommended-pattern');
var $recommendedPatternText = document.querySelector('.recommended-pattern-text');
var $timingPattern = document.querySelector('.timing-pattern');
var $fbSequence = document.querySelector('.fb-sequence');
var $songRecommendation = document.querySelector('.song-recommendation');
var $description = document.querySelector('.description');
var $button = document.querySelector('button');

function randomNumber(maxNum) {
  return Math.floor(Math.random() * (maxNum - 1) + 1)
}

function updateAudio(sourceUrl){
  var fastOrSlow = randomNumber(3);
  console.log(fastOrSlow);
  var setSpeed;
  if (fastOrSlow == 1){
    setSpeed = '-fast.mp3';
  } else {
    setSpeed = '-slow.mp3'
  }
  $audioPlayer.setAttribute('src', 'audio/' + sourceUrl + setSpeed); 
  $audioPlayer.pause();
  $audioPlayer.load();
}

var generateFBRandoms = function() {
  var fatBackMax = 16;
  var $resultA = document.querySelector('.result-a'),
      $resultA2 = document.querySelector('.result-a2'),
      $resultB = document.querySelector('.result-b'),
      $resultC = document.querySelector('.result-c');

  var fatBackA = randomNumber(fatBackMax);
  var fatBackB = randomNumber(fatBackMax);
  var fatBackC = randomNumber(fatBackMax);
  $resultA.textContent = fatBackA;
  $resultA2.textContent = fatBackA;
  $resultB.textContent = fatBackB;
  $resultC.textContent = fatBackC;
}

var generateTimeAPattern = function() {
  var sectionTime = randomNumber(timePatternMax);
  $recommendedPattern.textContent = sectionTime;
  $recommendedPatternText.textContent = sectionTime;
}

var songRecommendation = function() {
  var randomSong = randomNumber(songMax);
  updateAudio(randomSong);
  $songNumber.textContent = randomSong;
}

var clearFBSequence = function() {
  $timingPattern.classList.remove('hidden');
  $fbSequence.classList.remove('hidden');
  $songRecommendation.classList.remove('hidden');
  $description.classList.remove('hidden');
}

var displayFBSequence = function(){
  clearFBSequence();
  generateTimeAPattern();
  generateFBRandoms();
  songRecommendation();
}

$button.addEventListener('click', displayFBSequence);

  