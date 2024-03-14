const song = new Audio('../assets/background2.mp3');
const x = document.querySelector('audio');
const sound = new Audio('../assets/dramatic.mp3');
const muteBtn = document.getElementById('mute');
const icon1 = document.getElementsByClassName('page-top')[0];
const icon2 = document.getElementsByClassName('page-top')[1];
const icon3 = document.getElementsByClassName('page-top')[2];
const icon4 = document.getElementsByClassName('page-top')[3];
const icon5 = document.getElementsByClassName('page-top')[4];
const icon6 = document.getElementsByClassName('page-top')[5];
const mystery = document.getElementById('mystery');
const time = document.getElementById('time');

mystery.addEventListener('click', () => {
  const audio = sound;

  playEffect(audio);
});

function playEffect(audio) {
  audio.volume = 0.2;
  if (audio.paused) {
    audio.play();
  }
}

function playAudio() {
  song.volume = 0.3;
  if (song.paused) {
    autoplay = true;
    song.play();
  }
  setInterval(playAudio, 1000);
}

muteBtn.addEventListener('click', () => {
  if (song.muted) {
    song.muted = false;
    // alert('Unmuted');
  } else {
    song.muted = true;
    alert('Muted');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    spinIcon();
  } else {
    console.log('not scrolling');
  }
});

function spinIcon() {
  icon1.style.transform = `rotate(${window.scrollY}deg)`;
  icon2.style.transform = `rotate(${window.scrollY}deg)`;
  icon3.style.transform = `rotate(${window.scrollY}deg)`;
  icon4.style.transform = `rotate(${window.scrollY}deg)`;
  icon5.style.transform = `rotate(${window.scrollY}deg)`;
  icon6.style.transform = `rotate(${window.scrollY}deg)`;
}

// window.addEventListener('click', function () {
//   song.volume = 0.3;
//   playAudio(song);
// });

function getDate() {
  let date = new Date();
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  console.log(date.toLocaleTimeString('en-us', options));
}

// setInterval(getTime);
