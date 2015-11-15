// Generate a random groove and apply a random song to layer the groove over

// Prompt user selection of fatback type
  // choices are limited to 'duple meter' and 'triple meter'

// Set Constants
var timePatternMax = 25,
    songMax = 91;
var $audioPlayer = document.querySelector('.audio-player'),
    $songNumber = document.querySelector('.song-number'),
    $recommendedPattern = document.querySelector('.recommended-pattern'),
    $timingPattern = document.querySelector('.timing-pattern'),
    $fbSequence = document.querySelector('.fb-sequence'),
    $songRecommendation = document.querySelector('.song-recommendation'),
    $description = document.querySelector('.description'),
    $notation = document.querySelector('.notation'),
    $button = document.querySelector('button');

function randomNumber(maxNum) {
  return Math.floor(Math.random() * (maxNum - 1) + 1)
}

function updateAudio(sourceUrl){
  var fastOrSlow = randomNumber(3),
      setSpeed;
  if (fastOrSlow == 1){
    setSpeed = '-fast.mp3';
  } else {
    setSpeed = '-slow.mp3'
  }
  $audioPlayer.setAttribute('src', 'audio/' + sourceUrl + setSpeed); 
  $audioPlayer.pause();
  $audioPlayer.load();
}

function getSkillLevel() {
  var $selectOption = document.querySelector('#sill-level');
  var userSelection = $selectOption.options[$selectOption.selectedIndex].value;
  return userSelection;
}

var generateFBRandoms = function() {
  getSkillLevel();
  var fatBackMax = 16,
      snareMax = 9,
      $resultA = document.querySelectorAll('.result-a'),
      $resultB = document.querySelector('.result-b'),
      $resultC = document.querySelector('.result-c'),
      fatBackRandomA = randomNumber(fatBackMax),
      fatBackRandomB = randomNumber(fatBackMax),
      fatBackRandomC = randomNumber(fatBackMax);
      snareRandomA = randomNumber(snareMax);
      snareRandomB = randomNumber(snareMax);
      snareRandomC = randomNumber(snareMax);
      $patternA = document.querySelectorAll('.pattern-a');
      $patternB = document.querySelectorAll('.pattern-b');
      $patternC = document.querySelectorAll('.pattern-c');
      $snare  = document.querySelectorAll('.snare');
      $snareA  = document.querySelectorAll('.snare-a');
      $snareB  = document.querySelectorAll('.snare-b');
      $snareC =  document.querySelectorAll('.snare-c');
  for(var i=0; i < $resultA.length; i++) {
      $resultA[i].textContent =  fatBackRandomA;
  }
  $resultB.textContent = fatBackRandomB;
  $resultC.textContent = fatBackRandomC;
  for(var i=0; i < $patternA.length; i++) {
      $patternA[i].setAttribute('src', 'images/fb1-3/' + fatBackRandomA + ".png");
  }
  for(var i=0; i < $patternB.length; i++) {
      $patternB[i].setAttribute('src', 'images/fb1-3/' + fatBackRandomB + ".png");
  }
  for(var i=0; i < $patternC.length; i++) {
      $patternC[i].setAttribute('src', 'images/fb1-3/' + fatBackRandomC + ".png");
  }

  if(getSkillLevel() == "basic") {
    console.log("Skill Level is Basic");
    for(var i=0; i < $snare.length; i++) {
        $snare[i].setAttribute('src', 'images/fb2-4/1.png');
    }
  } else {
    for(var i=0; i < $snareA.length; i++) {
        $snareA[i].setAttribute('src', 'images/fb2-4/' + snareRandomA + ".png");
    }
    for(var i=0; i < $snareB.length; i++) {
        $snareB[i].setAttribute('src', 'images/fb2-4/' + snareRandomB + ".png");
    }
    for(var i=0; i < $snareC.length; i++) {
        $snareC[i].setAttribute('src', 'images/fb2-4/' + snareRandomC + ".png");
    } 
  }


  
}

var generateTimeAPattern = function() {
  var sectionTime = randomNumber(timePatternMax);
  $cymbalPattern = document.querySelectorAll('.cymbal');
  $recommendedPattern.textContent = sectionTime;
  for (var i=0; i < $cymbalPattern.length; i++) {
      $cymbalPattern[i].setAttribute('src', 'images/cymbal-patterns/' + sectionTime + ".png");
  }
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
  $notation.classList.remove('hidden');
}

var displayFBSequence = function(){
  clearFBSequence();
  generateTimeAPattern();
  generateFBRandoms();
  songRecommendation();
}

$button.addEventListener('click', displayFBSequence);
//$button.addEventListener('click', getSkillLevel);

  