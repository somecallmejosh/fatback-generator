var timePatternMax = 25,
    $songNumber = document.querySelector('.song-number'),
    $recommendedPattern = document.querySelector('.recommended-pattern'),
    $fbSequence = document.querySelector('.fb-sequence'),
    $button = document.querySelector('button'),
    $videoPlayer = document.querySelector('.video');
    $template = document.querySelector('.hidden');

function randomNumber(maxNum) {
  return Math.floor(Math.random() * (maxNum - 1) + 1)
}

function updateAudio(){
  var request = new XMLHttpRequest(),
      endPoint = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLidCjvFoClTfullv1y7ORSE7gCxvhzNGj&key=AIzaSyBIM5spu4yHSUrBN_IqhCEq4_5MvudG5Ac';
  request.open('GET', endPoint, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      var videoMax = data.items.length;
      var randomVideo = data.items[randomNumber(videoMax)].snippet.resourceId.videoId;
      $videoPlayer.setAttribute('src', 'https://www.youtube.com/embed/' + randomVideo);
    } else {
      console.log('Nothing to show here.');
    }
  };
  request.onerror = function() {
    console.log('There was an error of sorts.');
  };
  request.send();
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
      $patternA = document.querySelectorAll('.pattern-a'),
      $patternB = document.querySelectorAll('.pattern-b'),
      $patternC = document.querySelectorAll('.pattern-c'),
      $snare  = document.querySelectorAll('.snare'),
      $snareA  = document.querySelectorAll('.snare-a'),
      $snareB  = document.querySelectorAll('.snare-b'),
      $snareC =  document.querySelectorAll('.snare-c'),
      fatBackRandomA = randomNumber(fatBackMax),
      fatBackRandomB = randomNumber(fatBackMax),
      fatBackRandomC = randomNumber(fatBackMax),
      snareRandomA = randomNumber(snareMax),
      snareRandomB = randomNumber(snareMax),
      snareRandomC = randomNumber(snareMax);

  for(var i=0; i < $resultA.length; i++) {
      $resultA[i].textContent =  fatBackRandomA;
  }
  $resultB.textContent = fatBackRandomB;
  $resultC.textContent = fatBackRandomC;
  // Could be DRY'd up
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
    // Could be DRY'd up
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

var displayFBSequence = function(){
  $template.classList.remove('hidden');
  generateTimeAPattern();
  generateFBRandoms();
  updateAudio();
}

$button.addEventListener('click', displayFBSequence);
$button.addEventListener('click', getSkillLevel);

  