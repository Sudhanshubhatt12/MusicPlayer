let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songitem"));

let songs = [
  {
    songName: "Alan Walker - Faded",
    filepath: "songs/1.mp3",
  },
  { songName: "B PRAAK", filepath: "songs/2.mp3" },
  {
    songName: "Christina Perri - A Thousand Years",
    filepath: "songs/3.mp3",
  },
  {
    songName: "DJ Snake - Taki Taki",
    filepath: "songs/4.mp3",
  },
  {
    songName: "Ed Sheeran - Perfect",
    filepath: "songs/5.mp3",
  },
  {
    songName: "Love Me Like You Do",
    filepath: "songs/6.mp3",
  },
  { songName: "Mitti Di Khushboo", filepath: "songs/7.mp3" },
];
songitem.forEach((Element, i) => {
  Element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});
// audioElement.play();
//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  }
   else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//Listen to events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  myProgressbar.value = progress;
});
myProgressbar.addEventListener("change", () => {
  audioElement.currentTime = myProgressbar.value * audioElement.duration/ 100;
});
const makeallplay = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (Element) => {
      Element.classList.remove("fa-circle-pause");
      Element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (Element) => {
    Element.addEventListener("click", (e) => {
      makeallplay();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songIndex+1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=6){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})
