

let ischanged = false
let vidpath = ""
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

function changeImage() {
  var imgElement = document.getElementById("phoneimg")
  if (ischanged === false) {
    imgElement.src = "imgs/iphoneempty.png"
    ischanged = true
  }
  else {
    imgElement.src = "imgs/iphone.png"
    ischanged = false
  }
}