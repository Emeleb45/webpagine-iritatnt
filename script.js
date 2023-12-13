

let ischanged = false
let vidpath = ""
let lastPosition = null;
function playSound() {
  var boom = new Audio('sounds/Boom.mp3')
  boom.volume = 1.0
  boom.play();
}
let vidplaying = false
var phonevideo = document.getElementById("PhoneVideo")
phonevideo.controls = false;
function showAlertANDROID() {
    playSound()
    if (!vidplaying){
      vidpath = "vids/vid1.mp4"
      screenVideo()
      vidplaying = true
    }
    else{
      stopVideo()
      vidplaying = false
    }
  }
  function showAlertIOS() {
    playSound()
    if (!vidplaying){
      vidpath = "vids/vid1.mp4"
      screenVideo()
      vidplaying = true
    }
    else{
      stopVideo()
      vidplaying = false
    }
  }

function screenVideo() {
  phonevideo.src = vidpath
  phonevideo.play()
}

function stopVideo() {
  phonevideo.pause()
  phonevideo.src = ""
  videoPath = ""
}

function getRandomPosition() {
  let radius = 50
  const minX = lastPosition ? Math.max(0, lastPosition.x - radius) : 0
  const maxX = lastPosition ? Math.min(window.innerWidth - 200, lastPosition.x + radius) : window.innerWidth - 200
  const minY = lastPosition ? Math.max(0, lastPosition.y - radius) : 0
  const maxY = lastPosition ? Math.min(window.innerHeight - 60, lastPosition.y + radius) : window.innerHeight - 60
  const randomX = Math.random() * (maxX - minX) + minX
  const randomY = Math.random() * (maxY - minY) + minY
  return { x: randomX, y: randomY };
}

function moveButton(buttonId) {
  let button = document.getElementById(buttonId)
  if (lastPosition == null)  {
  let centerX = window.innerWidth / 500
  let centerY = window.innerHeight / 500
  lastPosition = { x: centerX, y: centerY }
  button.style.transform = `translate3d(${centerX}px, ${centerY}px, 0)`
  } else {
    let newPosition = getRandomPosition(lastPosition)
    lastPosition = newPosition
    button.style.transform = `translate3d(${newPosition.x}px, ${newPosition.y}px, 0)`
  }
}

function bob() {
  document.querySelector('.overlay-image').style.display = 'block';
  var bob = new Audio('sounds/Hans Zimmer - Oogway Ascends Kung Fu Panda Soundtrack.mp3')
  bob.volume = 1.0
  bob.play();
}
