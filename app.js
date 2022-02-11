//buttons

let playBtn = document.body.querySelector("#play")
let pauseBtn = document.body.querySelector("#pause")
let slider = document.body.querySelector("#cover");
let video = document.body.querySelector('video')

video.playbackRate= 0.7;


pauseBtn.addEventListener("click", function(){
  slider.style.transform="translate(60px)";
  video.pause()
})

playBtn.addEventListener("click", function(){
  slider.style.transform="translate(0px)"
  video.play()
})





