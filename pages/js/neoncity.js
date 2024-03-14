const icon = document.getElementById('iconST');
const ghost = document.getElementById('ghost');
const roulette = document.getElementById('roulette');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    spinIcon();
  } else {
    console.log('not scrolling');
  }
});

function spinIcon() {
  icon.style.transform = `rotate(${window.scrollY}deg)`;
  roulette.style.transform = `rotate(${window.scrollY / 5}deg)`;
}
